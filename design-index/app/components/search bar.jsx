import search from "../assets/search-ai-line.svg";
import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';
import { useState, useEffect} from "react";
import { supabase } from "../supabaseClient";
import useGlobalStore from "../zustand-global-storage"; 
import { useNavigate } from "react-router";

const nlp = winkNLP(model);
const its = nlp.its;

function SearchBar() {
  const [tempinput_value, setTempInputValue] = useState("");
  const [finalinput_value, setFinalInputValue] = useState("");
  const setLoading = useGlobalStore(state => state.setLoading);
  const [keywords, setKeywords] = useState([]);
  const setResults = useGlobalStore(state => state.setResults);
  const setGlobalKeywords = useGlobalStore(state => state.setKeywords);

  const navigate = useNavigate();
  const handleSearchImage = () => {
    navigate("/search");
  };


  useEffect(() => {
    if (finalinput_value === "") {
      setKeywords([]);
      return;
    }

    setLoading(true)
    // Process the input value to extract keywords 
    const doc = nlp.readDoc(finalinput_value);
    let mainkeywords = doc.tokens()
      .filter((token) => {
        const pos = token.out(its.pos);
        return ['NOUN', 'ADJ', 'PROPN','VERB'].includes(pos);
      })
      .out(its.lemma);
    //Extracts the lemmas of the tokens that are nouns, adjectives, proper nouns, or verbs 
    const customStopwords = ["want", "need", "use", "get", "have", "make", "find", "see", "create", "show", "add", "help", "look"];
    mainkeywords = mainkeywords.filter(word => word.length > 1 && /[a-z]/i.test(word) && !customStopwords.includes(word));

    //regex fallback implemented to include the alphanumeric words in the extracted array list
    const regexFallback = finalinput_value.toLowerCase().match(/\b[\da-z\-]{2,}\b/g) || [];
    const extraKeywords = regexFallback.filter(w => /\d/.test(w) && /[a-z]/i.test(w));{/*filters the words which are only alphanumeric*/}
    const finalKeywords = [...new Set([...mainkeywords, ...extraKeywords])].map(k => k.toLowerCase());{/*set removes duplicates from the array*/}

    setKeywords(finalKeywords);
    setGlobalKeywords(finalKeywords);
    console.log("Extracted keywords:", finalKeywords);

  //Fetch results from Supabase using the extracted keywords
    async function fetchResults(finalKeywords) {
      if (finalKeywords.length === 0) 
        return;

      const { data, error } = await supabase
          .from('design_index')
          .select('*')
          .or(`seo_keywords.ov.{${finalKeywords.join(',')}}`);;

      if (error) {
        console.error("Supabase query error:", error);
      } else {
        console.log("Supabase search results:", data);
      }
      
      const final_result = data.map((tool) => {
        const matchedKeywords = finalKeywords.filter(k => tool.seo_keywords.includes(k)).length
        return {
          id:tool.primary_key,
          tool: tool.tool_name,
          matchedKeywords: matchedKeywords
        };
      });

      const sortedResults = final_result.filter(tool => tool.matchedKeywords > 0).sort((a, b) => b.matchedKeywords - a.matchedKeywords);
        setResults(sortedResults);
        console.log("Sorted results:", sortedResults);
        if (sortedResults.length >= 0) { 
          navigate("/search_results"); 
          setLoading(false); // Stop loading when results are fetched
        }
    }
    fetchResults(finalKeywords);

  }, [finalinput_value]);

  return (
    <>
      <div className="h-[36px] md:h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] flex flex-row items-center justify-start w-full bg-white border-[1px] border-[#f0f0f0] drop-shadow-sm drop-shadow-neutral-100 rounded-[10px] xl:rounded-[14px] 2xl:rounded-[16px] z-5 p-[5px]">
        <img src={search} alt="search icon" className="w-[22px] h-[22px] md:size-[18px] lg:size-[20px] xl:size-[22px] 2xl:size-[26px] ml-[5px]" />  
        <textarea
          inputMode="text"
          enterKeyHint="search"
          value={tempinput_value}
          onChange={(e) => {
            setTempInputValue(e.target.value);
          }}
          placeholder="search from 200+ tools"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              setFinalInputValue(tempinput_value);
              e.target.blur();//hides the mobile keyboard automatically after searching
            } 
          }}
          onClick={handleSearchImage}

          className="w-full overflow-hidden resize-none font-Outfit font-semibold text-black text-[16px] md:text-[15px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] placeholder:text-[#737373] placeholder:font-medium placeholder:tracking-normal ml-2 mr-2 outline-none bg-transparent leading-tight"
          rows={1}
        />
      </div>
    </>
  );
}

export default SearchBar;
