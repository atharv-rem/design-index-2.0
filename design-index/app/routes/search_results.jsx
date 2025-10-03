import data from "../database.json";
import send from "../assets/submit.svg";
import Zustand_global_storage from "../zustand-global-storage.js";
import { useState } from "react";
import {Link} from "react-router";

function Cards(items){
    return(
        <>
        <div className="grid grid-cols-1 sm:hidden gap-[15px] items-start justify-center w-auto ml-[5px] mt-[10px] mr-[5px]">
            {items.map((item, index) => (
                <Link
                    key={index}
                    to={`/tool/${item.tool_name.toLowerCase()}`}
                    className="sm:hidden bg-white justify-start items-start flex flex-row hover:shadow-sm hover:translate-y-[-2px] transition-all duration-200 ease-in-out cursor-pointer"
                >
                    <img alt={item.description.toLowerCase()} src={item.og_image_link} className="h-[110px] w-[200px] sm:h-[110px] sm:w-[220px] md:h-[130px] md:w-[240px] lg:h-[140px] lg:w-[240px] xl:w-[300px] xl:h-[160px] 2xl:w-[340px] 2xl:h-[185px] rounded-[10px] sm:rounded-[10px] md:rounded-[14px] lg:rounded-[14px] xl:rounded-[18px] flex-shrink-0 overflow-hidden ml-[5px] xs:ml-[5px] sm:ml-[6px] md:ml-[7px] lg:ml-[7px] xl:ml-[5px] 2xl:ml-[7px] mt-[5px] mb-[5px]" />
                    <div className='flex flex-col justify-start items-start ml-[15px] mr-[12px] w-auto h-full mt-[10px]'>
                        <div className="text-[14px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] text-black font-Outfit font-bold p-0 leading-4 xl:leading-5 mt-[5px] lg:mt-[8px] 2xl:mt-[15px]">{item.tool_name}</div>
                        {item.pricing.length > 5 ? (
                            <div className='flex flex-row items-center justify-start'>
                                <div className="font-Poppins font-semibold flex text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">free</div>
                                <div className="flex font-Poppins font-semibold text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] ml-[5px] 2xl:mt-[15px]">paid</div>
                            </div>
                        ) : item.pricing === 'free' ? (
                            <div className="font-Poppins font-semibold flex text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">free</div>
                        ) : item.pricing === 'paid' ? (
                            <div className="flex font-Poppins font-semibold text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">paid</div>
                        ) : null}
                        <p className="text-[12px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] font-Outfit font-semibold text-[#595959]  leading-[12px] xs:leading-[15px] sm:leading-3 md:leading-4 lg:leading-5 justify-evenly mr-[5px] mt-[5px] lg:mt-[7px] 2xl:mt-[10px]">
                        {item.description.toLowerCase()}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
        <div className="sm:pb-[100px] md:pb-[50px] hidden overflow-auto sm:grid sm:grid-cols-4 sm:gap-[28px] xl:gap-[38px] 2xl:gap-[45px] mt-[10px] w-full pt-[5px] px-[15px] md:px-[5px] hide-scrollbar items-start">
            {items.map((item, index) => (
                <Link
                    key={index}
                    to={`/tool/${item.tool_name.toLowerCase()}`}
                    className="group bg-white rounded-[10px] lg:rounded-[20px] xl:rounded-[24px] justify-start items-center flex flex-col hover:shadow-md hover:translate-y-[-2px] hover:scale-102 transition-all duration-200 ease-in-out cursor-pointer">
                <img
                    alt={item.description.toLowerCase()}
                    loading='lazy'
                    src={item.og_image_link}
                    className="rounded-t-[10px] lg:rounded-[20px] xl:rounded-[24px] w-full object-cover transition-transform duration-200 group-hover:scale-102 mb-[5px] relative aspect-[16/9]"/>
                    <div className='flex flex-col justify-start items-start mb-[10px] w-full h-full mt-[5px] px-[15px]'>
                        <div className="text-[14px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] text-black font-Outfit font-bold p-0 leading-4 xl:leading-5 mt-[5px] lg:mt-[8px] 2xl:mt-[15px]">{item.tool_name}</div>

                            {item.pricing.length > 5 ? (
                            <div className='flex flex-row items-center justify-start'>
                            <div className="font-Poppins font-semibold flex text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">free</div>
                            <div className="flex font-Poppins font-semibold text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] ml-[5px] 2xl:mt-[15px]">paid</div>
                            </div>
                            ) : item.pricing === 'free' ? (
                                <div className="font-Poppins font-semibold flex text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">free</div>
                            ) : item.pricing === 'paid' ? (
                                <div className="flex font-Poppins font-semibold text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">paid</div>
                            ) : null}

                            <p className="text-[12px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] font-Outfit font-semibold text-[#595959]  leading-[12px] xs:leading-[15px] sm:leading-3 md:leading-4 lg:leading-5 justify-evenly mr-[5px] mt-[5px] lg:mt-[7px] 2xl:mt-[10px]">
                            {item.description.toLowerCase()}
                            </p>
                    </div>
                </Link>
            ))}
        </div>
        </>
    )
}

export default function Searchresults() {
    const results = Zustand_global_storage((state) => state.results);
    const keywords = Zustand_global_storage((state) => state.keywords);
    const hasSearched = Zustand_global_storage((state) => state.hasSearched);
    const similar_results_count = results.filter((result) => result.matchedKeywords === 1).length;
    const [click, setClick] = useState(false);
    const handle_similar_results_click = () => setClick(!click);
    
    //if no results are found or no keywords are entered, this will show a message to the user
    if (hasSearched && (results.length === 0 || keywords.length === 0)) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <span className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] font-Outfit font-semibold text-black">No results found</span>
                <span className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-Outfit font-medium text-[#737373]">Try adjusting your search query and try again.</span>
                <Link to="/submit-a-tool" className="mt-[10px] px-[10px] w-auto bg-white border-[1.5px] border-[#f0f0f0] md:rounded-[12px] lg:rounded-[17px] xl:rounded-[22px] 2xl:rounded-[27px] flex flex-row items-center justify-center opacity-100 md:opacity-70 md:hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out">
                    <img src={send} alt="submit icon" className="size-[28px] xl:size-[35px] 2xl:size-[40px] p-[5px] mr-[2px]" />
                    <span className="text-[15px] md:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] font-Outfit font-semibold">submit a tool</span>
                </Link>
            </div>
        );
    }
    else {
            //this lets me show only relevant results when match count is only 1 in the results array
            if (results.every(r => r.matchedKeywords <= 1)) {
                return(
                    <>
                        <div className="flex flex-col items-start justify-center h-auto mt-[10px] font-Outfit text-black font-semibold text-[15px] sm:text-[17px] md:text-[15px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] ml-[10px]">relevant results</div>
                        <div className="flex flex-col items-start justify-center h-auto ml-[10px] font-Outfit text-[#898989] font-semibold text-[15px] sm:text-[17px] md:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[24px] mb-[10px]">{similar_results_count} tools</div>
                        {Cards(data.filter(item => results.find(r => r.id === item.primary_key && r.matchedKeywords === 1)))}
                    </>
                )
                
            }

            //this lets me show relevant results and similar results when match count is greater than 1 in the results array
            else if (results.some(r=> r.matchedKeywords > 1)) {
                return (() => {
                    //this allows me to show only the keywords with highest match count
                    const max_match_count = Math.max(...results.map(r => r.matchedKeywords));
                    const highest_match_results = results.filter(r => r.matchedKeywords === max_match_count);
                    const relevant_results = data.filter(item => highest_match_results.some(r => r.id === item.primary_key));
                    
                    let similar_results;
                    if (max_match_count === 2) {
                        // If max match count is 2, show similar_results with exactly 1 match
                        similar_results = data.filter(item =>
                            results.some(r =>
                                r.id === item.primary_key && r.matchedKeywords === 1
                            )
                        );
                    } else {
                        // otherwise, show similar_results with more than 1 match_count and less than max match_count
                        similar_results = data.filter(item =>
                            results.some(r =>
                                r.id === item.primary_key && r.matchedKeywords < max_match_count && r.matchedKeywords > 1
                            )
                        );
                    }

                const similar_results_count = similar_results.length;
                return (
                <>  
                <div className="flex flex-row mt-[10px]">
                    <div className="flex flex-col ml-[10px] md:ml-0">
                        <div onClick={handle_similar_results_click} className="flex flex-col items-start justify-center h-auto font-Outfit text-black font-semibold text-[15px] sm:text-[17px] md:text-[15px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] bg-[#f2f2f2] rounded-[5px] px-[10px] cursor-pointer">relevant results</div>
                        <div className="mt-[5px] flex flex-col items-start justify-center h-auto ml-[5px] font-Outfit text-[#898989] font-semibold text-[15px] sm:text-[17px] md:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[24px]">{relevant_results.length} tools</div>
                    </div>
                    <div className="flex flex-col ml-[10px]">
                        <div onClick={handle_similar_results_click} className="font-Outfit text-black font-semibold text-[15px] sm:text-[17px] md:text-[15px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] bg-[#f2f2f2] rounded-[5px] px-[10px] cursor-pointer">similar results</div>
                        <div className="mt-[5px] flex flex-col items-start justify-center h-auto ml-[5px] font-Outfit text-[#898989] font-semibold text-[15px] sm:text-[17px] md:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[24px]">{similar_results_count} tools</div>
                    </div>
                </div>
                    {click ? (Cards(data.filter(item => results.find(r => r.id === item.primary_key && r.matchedKeywords < max_match_count )))) : (Cards(relevant_results))}
                </>
                );
                })();
            }
    }
}
