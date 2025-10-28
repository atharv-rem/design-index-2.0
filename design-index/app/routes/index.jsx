import { useEffect,useState } from "react";
import { Link } from "react-router";

export const meta = () => [
  { title: "Design Index - Collection of the best design resources on the internet" },
  { name: "description", content: "Collection of the best design resources on the internet" },
  { property: "og:title", content: "Design Index - Collection of the best design resources on the internet" },
  { property: "og:description", content: "Collection of the best design resources on the internet" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://designindex.xyz/preview.avif" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Design Index - Collection of the best design resources on the internet" },
  { name: "twitter:description", content: "Collection of the best design resources on the internet" },
  { name: "twitter:image", content: "https://designindex.xyz/twitter_preview.avif" },
];



export default function Homepage() {
  const [tool, setTool] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchTool() {
      try {
        const res = await fetch("http://localhost:8080/api/featured");
        if (!res.ok) throw new Error("Failed to fetch featured tool");
        const data = await res.json();
        setTool(data);
      } catch (err) {
        console.error(err);
        setError("Could not load featured tool.");
      }
    }

    fetchTool();
  }, []);

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-auto bg-white">
      {/* Hero Section */}
      <div className="flex flex-col items-start justify-center w-full h-[100dvh] bg-white">
        
        {/* Desktop Version */}
        <div className="hidden w-full md:flex flex-col items-start">
          <p className="text-[35px] xs:text-[40px] sm:text-[65px] md:text-[65px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] font-CalSans mb-[5px]">
            Best design resources
          </p>
          <p className="text-[35px] xs:text-[40px] sm:text-[65px] md:text-[65px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] font-CalSans mb-[10px] mt-0 leading-[10px] md:leading-[20px] 2xl:leading-[35px]">
            on the internet
          </p>
        </div>
        
        {/* Mobile Version */}
        <div className="w-full flex-col items-start block md:hidden mt-[15px] ml-[10px]">
          <p style={{ fontFamily: "Cal sans, sans-serif"}} className="text-[50px] xs:text-[60px] sm:text-[70px] mb-[5px] leading-[45px] sm:leading-[60px]">
            Best design
          </p>
          <p style={{ fontFamily: "Cal sans, sans-serif"}} className="text-[50px] xs:text-[60px] sm:text-[70px] mb-[5px] leading-[45px] sm:leading-[60px]">
            resources on
          </p>
          <p style={{ fontFamily: "Cal sans, sans-serif"}} className="text-[50px] xs:text-[60px] sm:text-[70px] mb-[5px] leading-[45px] sm:leading-[60px]">
            the internet
          </p>
        </div>

        {/* Tagline Section mobile*/}
        <div className="w-full flex flex-col items-start justify-center text-left mt-[10px] ml-[10px] sm:hidden">
          <p style={{fontFamily: "Outfit, sans-serif", fontWeight: 500, fontSize: '20px', lineHeight: '1', color: '#4a4a4a', maxWidth: '900px', marginRight: '10px',display: 'flex', flexDirection: 'column'}} >
            <span>internet's handpicked design resources,</span> 
            <span>we don’t compromise on quality</span>
          </p>
        </div>

        {/* Tagline Section desktop*/}
        <div className="hidden w-full sm:flex sm:ml-[10px] md:ml-0 items-start flex-col justify-center mt-[10px] md:mt-[30px] xl:mt-[40px] 2xl:mt-[50px] sm:leading-7 xl:leading-8 sm:pr-[100px] lg:pr-[200px] xl:pr-[250px] 2xl:pr-[300px]">
          <p className="flex flex-col sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] font-medium font-Outfit text-[#4a4a4a]">
            <span>internet's handpicked design resources,</span> 
            <span>we don’t compromise on quality</span>
          </p>
        </div>
           

        <div className="flex flex-col sm:flex-row mt-[30px] w-full h-auto px-[20px] md:px-[10px]">
          <Link to={`/tool/${tool?.tool_name.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="flex flex-row relative rounded-[15px] shadow-sm border-[1px] border-[#e2e2e2] w-auto xs:w-[380px] h-auto sm:w-[350px] md:w-[400px] xl:w-[450px] xl:h-[150px] 2xl:w-[540px] 2xl:h-[180px] p-[5px] xl:p-[8px] ">
            <div className="w-auto h-auto px-[5px] py-[2px] border-[2px] border-white font-Outfit font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px] text-white rounded-[8px] absolute -top-[10px] -left-[10px] bg-[black] z-5 shadow-lg ">
              #Featured
            </div>
            <img src={tool?.og_image_link} alt={tool?.tool_name} className="w-[180px] h-[100px] sm:w-[200px] sm:h-[120px] xl:w-[250px] xl:h-auto 2xl:w-[300px] rounded-[10px] flex-shrink-0" />
            <div className="flex flex-col mx-[10px] justify-center items-start">
              <p className="text-[20px] sm:text-[22px] xl:text-[24px] 2xl:text-[28px] font-Outfit font-bold text-black">{tool?.tool_name}</p>
              <p className="text-[15px] sm:text-[17px] xl:text-[19px] 2xl:text-[21px] font-Outfit font-semibold text-[#818181] leading-[15px] xl:leading-[18px] 2xl:leading-[20px]">{tool?.description}</p>
            </div>
          </Link>
          <Link to="https://pplx.ai/atharvrem" target="_blank" rel="noopener noreferrer" className="flex flex-row relative rounded-[15px] shadow-sm border-[1px] border-[#e2e2e2] w-auto h-auto xs:w-[380px] sm:w-[350px] md:w-[400px] xl:w-[500px] xl:h-[150px] 2xl:w-[600px] 2xl:h-[180px] p-[5px] xl:p-[8px] mt-[20px] sm:mt-0 sm:ml-[20px]">
              <div className="w-auto h-auto px-[5px] py-[2px] border-[2px] border-white font-Outfit font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px] text-white rounded-[8px] absolute -top-[10px] -left-[10px] bg-[black] z-5 shadow-lg">
                #AD
              </div>
              <img src="https://pub-c51f3dea40b34c5f8f4cd14637f22cdc.r2.dev/ad.png" alt="Threads Logo" className="w-[180px] h-[100px] sm:w-[200px] sm:h-[120px] xl:w-[250px] xl:h-auto 2xl:w-[300px] rounded-[10px] flex-shrink-0" />
              <div className="flex flex-col mx-[20px] justify-center items-center">
                <p className="text-[15px] xs:text-[20px] xl:text-[25px] 2xl:text-[30px] font-Outfit font-bold text-black leading-[20px] xl:leading-[25px] 2xl:leading-[30px] flex flex-col">
                  <span>free 1 month of</span>
                  <span>perplexity pro</span>
                </p>
              </div>
          </Link>
        </div>

      </div>

      {/* Featured On Section */}
      <div className="flex flex-col items-start justify-center mt-[20px] mb-[100px] w-full h-auto ml-[20px]">
        <p className="text-[40px] font-CalSans ">
          Featured on 
        </p>
        <div className="flex flex-row items-center justify-start mt-[10px] gap-x-[10px] gap-y-[10px] flex-wrap">
          <a href="https://twelve.tools" target="_blank" className="cursor-pointer hover:translate-y-[-5px] transition-transform duration-300" rel="noopener noreferrer">
              <img src="https://twelve.tools/badge0-white.svg" alt="Featured on Twelve Tools" className="w-auto h-[35px] sm:h-[40px] lg:h-[45px] xl:h-[50px] 2xl:h-[55px]" />
          </a>
          <a href="https://toolfame.com/item/design-index" target="_blank" className="ml-[10px] cursor-pointer hover:translate-y-[-5px] transition-transform duration-300" rel="noopener noreferrer">
              <img src="https://toolfame.com/badge-light.svg" className="w-auto h-[35px] sm:h-[40px] lg:h-[45px] xl:h-[50px] 2xl:h-[55px]" alt="Featured on toolfame.com" />
          </a>
          <a 
          href="https://www.producthunt.com/products/don-t-be-an-average-designer/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[200px] h-[45px] xl:w-[280px] xl:h-[60px] 2xl:w-[300px] 2xl:h-[70px] hover:scale-105 transition-transform duration-300 "
        >
        <svg 
          width="auto" 
          height="auto" 
          viewBox="0 0 250 54" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-label="Leave a review on Product Hunt"
          className="rounded-[18px] xl:rounded-[22px] 2xl:rounded-[28px] border-[1px] border-[#ededed] shadow-sm"
        >
          <g fill="none" fillRule="evenodd">
            <rect 
              x="0.5" 
              y="0.5" 
              width="249" 
              height="53" 
              rx="10" 
              className="fill-white" 
            />
            
            <text 
              x="53" 
              y="20" 
              fontFamily="Outfit" 
              fontSize="9" 
              fontWeight="bold" 
              className="fill-black"
            >
              LEAVE A REVIEW ON
            </text>

            <text 
              x="52" 
              y="40" 
              fontFamily="Outfit" 
              fontSize="16" 
              fontWeight="bold" 
              className="fill-black"
            >
              Product Hunt
            </text>

            {/* Star icon */}
            <g transform="translate(205, 11) scale(1.4)" className="fill-black">
              <path d="M23.04,9.021L14.77,8.796L12,1L9.23,8.796L0.96,9.021l6.559,5.043L5.177,22L12,17.321L18.823,22l-2.342-7.935L23.04,9.021z M12,14.896l-3.312,2.271l1.137-3.851l-3.183-2.448l4.014-0.109L12,6.974l1.344,3.784l4.014,0.109l-3.183,2.448l1.137,3.851 L12,14.896z"/>
            </g>

            {/* PH logo */}
            <g transform="translate(11, 12)">
              <circle r="15.5" cx="15.5" cy="15.5" className="fill-white stroke-1 stroke-[#dddddd]"/>
              <path 
                d="M17.4329412,15.9558824 L17.4329412,15.9560115 L13.0929412,15.9560115 L13.0929412,11.3060115 L17.4329412,11.3060115 L17.4329412,11.3058824 C18.7018806,11.3058824 19.7305882,12.3468365 19.7305882,13.6308824 C19.7305882,14.9149282 18.7018806,15.9558824 17.4329412,15.9558824 M17.4329412,8.20588235 L17.4329412,8.20601152 L10.0294118,8.20588235 L10.0294118,23.7058824 L13.0929412,23.7058824 L13.0929412,19.0560115 L17.4329412,19.0560115 L17.4329412,19.0558824 C20.3938424,19.0558824 22.7941176,16.6270324 22.7941176,13.6308824 C22.7941176,10.6347324 20.3938424,8.20588235 17.4329412,8.20588235" 
                className="fill-black"
              />
            </g>
          </g>
        </svg>
          </a>
          <a href="https://peerlist.io/atharv_rem/project/design-index" target="_blank" rel="noreferrer">
            <img
              src="https://peerlist.io/api/v1/projects/embed/PRJHOK8DGGPOKQMLR28NLOMKQQ68AB?showUpvote=true&theme=light"
              alt="Design Index"
              className="w-auto h-[35px] sm:h-[40px] lg:h-[45px] xl:h-[50px] 2xl:h-[55px]"
            />
          </a>
          <a href="https://openhunts.com/projects/design-index" target="_blank" title="OpenHunts Top 2 Daily Winner" className="cursor-pointer hover:translate-y-[-5px] transition-transform duration-300">
            <img 
              src="https://openhunts.com/images/badges/top2-light.png" 
              alt="OpenHunts Top 2 Daily Winner" 
              className="w-auto h-[35px] sm:h-[40px] lg:h-[45px] xl:h-[50px] 2xl:h-[55px]" 
            />
          </a>
        </div>
      </div>
      <div className="w-full h-auto bg-white flex flex-col items-center justify-center mb-[20px] mt-[50px]">
        <p className="text-[15px] font-Outfit font-semibold text-[#000000] leading-[15px]">© 2025 Design Index</p>
      </div>
    </div>
    </>
  );
}