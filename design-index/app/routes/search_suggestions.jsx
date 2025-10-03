import Zustand_global_storage from '../zustand-global-storage';
import x from "../assets/x-logo.svg"
export default function SearchSuggestions() {
  const loading = Zustand_global_storage(state => state.loading);

  return (
    <>
      {loading ? 
      (
        <div className="w-full flex justify-center h-svh items-center">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      
      )
      : 
      (
        <div className="flex flex-col items-start ml-[15px] sm:ml-0 sm:items-center justify-center w-full h-auto sm:h-svh mt-[20px] sm:mt-0 bg-white">
          <div className='items-start z-4'>
            <p className="text-2xl text-black font-Outfit font-semibold">
              Suggestions
            </p>
            <ul className="list-disc pl-6 mt-2 flex flex-col items-start justify-center w-auto">
                <li className="text-lg text-black font-Outfit font-medium">
                  "dark mode portfolio"
                </li>
                <li className="text-lg text-black font-Outfit font-medium">
                  "minimalist website design"
                </li>
                <li className="text-lg text-black font-Outfit font-medium">
                  "an icon library of 3d icons"
                </li>
            </ul>
          </div>
          <div
          style={{boxShadow: "0 0 250px 0 #F2F2F2, 0 0 250px 0 #F2F2F2, 0 0 250px 0 #F2F2F2, 0 0 250px 0 #F2F2F2, 0 0 74.16px 0 #F2F2F2, 0 0 37.08px 0 #F2F2F2"}} 
          className='flex flex-col sm:hidden mt-[10px] border-[1px] border-[#e6e6e6] rounded-[20px] w-auto h-auto p-[10px] z-2'>
            <div className='flex flex-row justify-between items-center w-full px-[10px]'>
              <p className="text-[15px] text-black font-Outfit font-medium">@toolfolio</p>
              <img src={x} alt="twitter logo" className="size-[20px]"/>
            </div>
            <div className='mt-[10px] justify-center items-center w-full px-[20px] mb-[20px]'>
              <p className="text-[20px] text-black font-Outfit font-bold">"Search is awesome"</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

