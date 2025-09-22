import {Outlet,Link} from 'react-router';

export const meta = () => [
  { title: "Fonts | Design Index" },
  {
    name: "description",
    content:"curated selection of font libraries to enhance your typography with style, clarity, and brand identity",
  },
  { property: "og:title", content: "Fonts | Design Index" },
  {
    property: "og:description",
    content:"Curated selection of font libraries to enhance your typography with style, clarity, and brand identity",
  },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://designindex.xyz/preview.avif" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Fonts | Design Index" },
  {
    name: "twitter:description",
    content:
      "Curated selection of font libraries to enhance your typography with style, clarity, and brand identity.",
  },
  {
    name: "twitter:image",
    content: "https://designindex.xyz/twitter_preview.avif",
  },
];

function Mockups() {
  return (
    <>
          {/* title section */}
          <div className="md:mt-0 flex flex-col items-start justify-center w-full sm:w-auto p-[5px] ml-[5px] md:ml-0">
            <span className="font-semibold text-[32px] md:text-[28px] lg:text-[30px] xl:text-[45px] 2xl:text-[55px] font-Outfit">fonts</span>
            <p className=" hidden sm:block text-[15px] md:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] font-Outfit font-medium mr-[12px] leading-4 md:leading-4 lg:leading-5 xl:leading-6 2xl:leading-7 text-justify">
              A handpicked selection of font libraries to bring personality and clarity to your typography. 
              Whether you're looking for elegant serifs, modern sans-serifs, or expressive display fonts, 
              this section helps you find the perfect typeface to elevate your design language and reinforce brand identity.
            </p>
            <p className="text-[15px] font-Outfit font-medium mr-[12px] leading-4 block sm:hidden">
              A handpicked collection of fonts to add personality and clarity to your typography.
              From elegant serifs to bold display fonts, find the perfect typeface to elevate your design and brand.
            </p>
          </div>
          <div className='flex flex-row items-start justify-start h-auto w-auto mt-[10px] ml-[10px]'>
            <span className='font-Outfit text-[20px] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[23px] text-[#575757] font-semibold'>Filter:</span>
            <Link to="/fonts" className='cursor-pointer flex h-auto w-auto py-[3px] px-[8px] lg:px-[10px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] text-black bg-gray-200 ml-[10px] rounded-[10px]'>all</Link>
            <Link to="/fonts/free" className='cursor-pointer flex h-auto w-auto py-[3px] px-[8px] lg:px-[10px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#20851c] bg-[#d9ffd7] ml-[10px] rounded-[10px]'>free</Link>
            <Link to="/fonts/paid" className='cursor-pointer flex w-auto px-[8px] lg:px-[10px] h-auto py-[3px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#ab2a2a] bg-[#ffe5e5] ml-[10px] rounded-[10px]'>paid</Link>
            <Link to="/fonts/freemium" className='cursor-pointer flex w-auto px-[8px]  lg:px-[10px] h-auto py-[3px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] bg-[#f7d9ff] text-[#D22BEC] ml-[10px] rounded-[10px]'>free, paid</Link>
          </div>
          <Outlet/>
    </>
  );
}

export default Mockups;
