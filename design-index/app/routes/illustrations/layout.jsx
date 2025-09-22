import {Outlet,Link} from 'react-router';

export const meta = () => [
  { title: "Illustrations | Design Index" },
  {
    name: "description",
    content:"A curated collection of illustrations—from clean flats to intricate artworks—designed to add depth, emotion, and storytelling to your projects.",
  },
  { property: "og:title", content: "Illustrations | Design Index" },
  {
    property: "og:description",
    content:"A curated collection of illustrations—from clean flats to intricate artworks—designed to add depth, emotion, and storytelling to your projects.",
  },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://designindex.xyz/preview.avif" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Illustrations | Design Index" },
  {
    name: "twitter:description",
    content:
      "A curated collection of illustrations—from clean flats to intricate artworks—designed to add depth, emotion, and storytelling to your projects.",
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
            <span className="font-semibold text-[32px] md:text-[28px] lg:text-[30px] xl:text-[45px] 2xl:text-[55px] font-Outfit">illustrations</span>
            <p className=" hidden sm:block text-[15px] md:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] font-Outfit font-medium mr-[12px] leading-4 md:leading-4 lg:leading-5 xl:leading-6 2xl:leading-7 text-justify">
              A rich archive of illustrations ranging from minimal flat styles to detailed artworks. 
              Use these visual assets to add depth, storytelling, and emotional warmth to your projects,
              making them more engaging, memorable, and human-centered.
            </p>
            <p className="text-[15px] font-Outfit font-medium mr-[12px] leading-4 block sm:hidden">
              A rich archive of illustrations—from minimal to detailed—to add depth, emotion, and storytelling to your projects.
              Make your work more engaging, memorable, and human-centered.
            </p>
          </div>
          <div className='flex flex-row items-start justify-start h-auto w-auto mt-[10px] ml-[10px]'>
            <span className='font-Outfit text-[20px] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[23px] text-[#575757] font-semibold'>Filter:</span>
            <Link to="/illustrations" className='cursor-pointer flex h-auto w-auto py-[3px] px-[8px] lg:px-[10px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] text-black bg-gray-200 ml-[10px] rounded-[10px]'>all</Link>
            <Link to="/illustrations/free" className='cursor-pointer flex h-auto w-auto py-[3px] px-[8px] lg:px-[10px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#20851c] bg-[#d9ffd7] ml-[10px] rounded-[10px]'>free</Link>
            <Link to="/illustrations/paid" className='cursor-pointer flex w-auto px-[8px] lg:px-[10px] h-auto py-[3px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#ab2a2a] bg-[#ffe5e5] ml-[10px] rounded-[10px]'>paid</Link>
            <Link to="/illustrations/freemium" className='cursor-pointer flex w-auto px-[8px]  lg:px-[10px] h-auto py-[3px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] bg-[#f7d9ff] text-[#D22BEC] ml-[10px] rounded-[10px]'>free, paid</Link>
          </div>
          <Outlet/>
    </>
  );
}

export default Mockups;
