import { useEffect, useState } from "react";
import tools from "../database.json"; 

export default function FeaturedTool() {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const seed = parseInt(today.replace(/-/g, ""), 10);
    const index = seed % tools.length;

    setFeatured(tools[index]);
  }, []);
  
  return(
  <div className="flex flex-col sm:flex-row mt-[30px] w-full h-auto px-[20px] md:px-[10px]">
          <a href={`/tool/${featured?.tool_name.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="flex flex-row relative rounded-[15px] shadow-sm border-[1px] border-[#e2e2e2] w-auto xs:w-[380px] h-auto sm:w-[350px] md:w-[400px] xl:w-[450px] xl:h-[150px] 2xl:w-[540px] 2xl:h-[180px] p-[5px] xl:p-[8px] ">
            <div className="w-auto h-auto px-[5px] py-[2px] border-[2px] border-white font-Outfit font-semibold text-[12px] xl:text-[14px] 2xl:text-[16px] text-white rounded-[8px] absolute -top-[10px] -left-[10px] bg-[black] z-5 shadow-lg ">
              #Featured
            </div>
            <img src={featured?.og_image_link} alt={featured?.tool_name} className="w-[180px] h-[100px] sm:w-[200px] sm:h-[120px] xl:w-[250px] xl:h-auto 2xl:w-[300px] rounded-[10px] flex-shrink-0" />
            <div className="flex flex-col mx-[10px] justify-center items-start">
              <p className="text-[20px] sm:text-[22px] xl:text-[24px] 2xl:text-[28px] font-Outfit font-bold text-black">{featured?.tool_name}</p>
              <p className="text-[15px] sm:text-[17px] xl:text-[19px] 2xl:text-[21px] font-Outfit font-semibold text-[#818181] leading-[15px] xl:leading-[18px] 2xl:leading-[20px]">{featured?.description}</p>
            </div>
          </a>
          <a href="https://pplx.ai/atharvrem" target="_blank" rel="noopener noreferrer" className="flex flex-row relative rounded-[15px] shadow-sm border-[1px] border-[#e2e2e2] w-auto h-auto xs:w-[380px] sm:w-[350px] md:w-[400px] xl:w-[500px] xl:h-[150px] 2xl:w-[600px] 2xl:h-[180px] p-[5px] xl:p-[8px] mt-[20px] sm:mt-0 sm:ml-[20px]">
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
          </a>
        </div>
    );
}