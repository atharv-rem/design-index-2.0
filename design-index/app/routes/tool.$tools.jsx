import data from "../database.json";
import { useParams,Link} from "react-router";
import left_arrow from "../assets/ArrowLeft.png";
import link_arrow from "../assets/link.svg";
import share_icon from "../assets/share.svg";
import { useState } from "react";

function addRefParam(url, ref = "designindex") {
  try {
    const u = new URL(url);
    u.searchParams.set("ref", ref);
    return u.toString();
  } catch {
    return url;
  }
}

// Dynamic meta tags per tool 
export const meta = ({ params }) => {
  const tools = data.find(
    (item) => item.tool_name.toLowerCase() === params.tools.toLowerCase()
  );

  return [
    { title: `${tools?.tool_name} | Design Index` },
    {
      name: "description",
      content: `{${tools?.description}}`,
    },
    { property: "og:title", content: `{${tools?.tool_name}}` },
    { property: "og:description", content: `{${tools?.description}}` },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `{${tools?.og_image_link}}` },
  ];
};

export default function ToolPage() {
  const { tools } = useParams();
  const selectedItem = data.find(
    (item) => item.tool_name.toLowerCase() === tools?.toLowerCase()
  );
  const [copied, setCopied] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  if (!selectedItem) {
    return <div>Tool not found</div>;
  }
  let tool = data.find((item) => item.tool_name.toLowerCase() === tools?.toLowerCase());
  let category = tool ? tool.category : null;

  if (category === "design_inspiration") {
    category = "design-inspo";
  } else if (!category) {
    category = null;
  } else {
    category = category + "s";
  }

  return (
    <div className='flex flex-col items-start justify-center h-auto mt-[5px] p-[5px] w-auto'>
      {/* Back button */}
      <Link to={`/${category}`} className='flex flex-row items-center justify-start cursor-pointer opacity-70 hover:opacity-100 hover:translate-x-[-2px] transition-all duration-200 ease-in-out'>
        <img src={left_arrow} alt='back arrow' className='w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] xl:w-[30px] xl:h-[30px] 2xl:w-[35px] 2xl:h-[35px]' />
        <span className='font-Outfit text-[18px] md:text-[18px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] font-medium text-[black] ml-[5px]'>back</span>
      </Link>

      <div className='flex flex-col sm:flex-row items-start justify-start mt-[10px]'>
        <img src={selectedItem.og_image_link} alt="og image" className=' h-auto w-full sm:h-[180px] sm:w-[320px] md:h-[180px] md:w-[340px] lg:h-[200px] lg:w-[360px] xl:h-[240px] xl:w-[440px] 2xl:h-[280px] 2xl:w-[520px] rounded-[20px] md:rounded-[20px] lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[40px] border-white border-[5px] shadow-lg'/>
        <div className='flex flex-col items-start justify-start ml-0 sm:ml-[20px]'>
        <span className='font-semibold text-[25px] md:text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-Outfit mt-[10px]'>{selectedItem.tool_name}</span>
        {selectedItem.pricing.length > 5 ? (
        <div className='flex flex-row items-center justify-start'>
          <div className="font-Outfit font-semibold flex text-[15px] sm:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[45px] h-[25px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[3px] 2xl:mt-[8px]">free</div>
          <div className="flex font-Outfit font-semibold text-[15px] sm:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[45px] h-[25px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[3px] ml-[5px] 2xl:mt-[8px]">paid</div>
        </div>
        )
        : selectedItem.pricing === 'free' ? (
        <div className="font-Outfit font-semibold flex text-[15px] sm:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[45px] h-[25px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[3px] 2xl:mt-[8px]">free</div>
        ) : selectedItem.pricing === 'paid' ? (
        <div className="flex font-Outfit font-semibold text-[15px] sm:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[45px] h-[25px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[3px] 2xl:mt-[8px]">paid</div>
        )
        : null}
        <p className=' text-[20px] sm:text-[15px] md:text-[15px] lg:text-[18px] xl:text-[23px] 2xl:text-[26px] font-Outfit font-medium sm:mr-[12px] mt-[5px] xl:mt-[10px] leading-[23px] sm:leading-[15px] lg:leading-5 xl:leading-6 2xl:leading-7 text-justify'>
          {selectedItem.extended_description.toLowerCase()}
        </p>
        <div className='flex w-full flex-col gap-y-[20px] gap-x-[10px] xl:gap-x-[20px] sm:flex-row items-center justify-center sm:justify-start mt-[15px]'>
          <div onClick={handleCopyLink} className='items-center justify-center w-[190px] xs:w-[260px] sm:w-auto h-auto px-[10px] py-[3px] bg-white shadow-sm border-[1.5px] border-[#e7e7e7] xs:rounded-[22px] rounded-[20px] sm:rounded-[13px] xl:rounded-[17px] flex flex-row hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out'>
              <img src={share_icon} alt='share icon' className='w-[25px] h-[25px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[19px] lg:h-[19px] xl:w-[22px] xl:h-[22px] 2xl:w-[26px] 2xl:h-[26px]' />
              <span className='text-[20px] xs:text-[25px] sm:text-[15px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[28px] text-black font-Outfit font-semibold ml-[5px]'>{copied ? "link copied!" : "share this tool"}</span>
          </div>
          <a href={addRefParam(selectedItem.website)} target="_blank" rel="noopener noreferrer">
            <div className='flex flex-row items-center justify-center w-[190px] xs:w-[260px] sm:w-auto px-[10px] py-[3px] h-auto bg-white shadow-sm border-[1.5px] border-[#e7e7e7] rounded-[20px] xs:rounded-[22px] sm:rounded-[13px] xl:rounded-[17px] hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out'>
              <img src={link_arrow} alt='link arrow' className='w-[23px] h-[23px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[19px] lg:h-[19px] xl:w-[22px] xl:h-[22px] 2xl:w-[26px] 2xl:h-[26px]' />
              <span className='text-[20px] xs:text-[25px] sm:text-[15px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[28px] font-Outfit text-black font-semibold ml-[5px]'>visit website</span>
            </div>
          </a>
        </div>
        </div>
        </div>
    </div>
  );
}
