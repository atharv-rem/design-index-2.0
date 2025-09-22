import Zustand_global_storage from '../zustand-global-storage';
export default function SearchSuggestions() {
  const loading = Zustand_global_storage(state => state.loading);

  return (
    <>
      {loading ? 
      (
        <div className="mt-[80px] w-full flex justify-center h-screen items-center">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      
      )
      : 
      (
        <div className="flex flex-col items-center justify-center w-auto md:w-[75vw] h-screen bg-white">
          <div className='items-start'>
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
        </div>
      )}
    </>
  );
}

