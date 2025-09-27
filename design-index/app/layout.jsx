import color from "./assets/color-card.svg"
import font from "./assets/text-font-stroke-rounded.svg"
import icon from "./assets/home-01-stroke-rounded.svg"
import mockup from "./assets/hold-phone-stroke-rounded.svg"
import design_inspo from "./assets/canvas-stroke-rounded.svg"
import illustration from "./assets/ai-beautify-stroke-rounded.svg"
import send from "./assets/submit.svg"
import sidebar_icon from "./assets/sidebar icon.png"
import sidebar_close_icon from "./assets/sidebar close.png"
import india from './assets/Indian flag.png';
import heart from './assets/love.png';
import twitter from "./assets/x-logo.svg"
import linkedin from "./assets/linkedin-logo.svg"
import logo from "./assets/logo.avif"
import threads from "./assets/threads-logo.svg"

import SearchBar from "./components/search bar.jsx";
import {Link,useLocation, Outlet, NavLink} from "react-router";
import useGlobalStore from "./zustand-global-storage.js"

export default function App() {
  const navItems = [
    {
      path: "/colours",
      label: "colours",
      icon: color,
    },
    {
      path: "/mockups",
      label: "mockups",
      icon: mockup,
    },
    {
      path: "/fonts",
      label: "fonts",
      icon: font
    },
    {
      path: "/design-inspo",
      label: "inspirations",
      icon: design_inspo
    },
    {
      path: "/icons",
      label: "icons",
      icon: icon
    },
    {
      path: "/illustrations",
      label: "illustrations",
      icon: illustration
    },
  ];
  const location = useLocation();
  const disable_scroll = [
  "/colours",
  "/mockups",
  "/fonts",
  "/design-inspo",
  "/icons",
  "/illustrations",
  "/submit-a-tool",
  "/feedback",
];
const should_disable_scroll = disable_scroll.some(path =>
  location.pathname.startsWith(path)
);


  // State to manage sidebar visibility
  const sidebar = useGlobalStore((state) => state.sidebar);
  const setSidebar = useGlobalStore((state) => state.setSidebar);
  const toggleSidebar = useGlobalStore((state) => state.toggleSidebar);

  const handleToggleSidebar = () => {
    console.log('Sidebar toggle function called!')
    toggleSidebar();
  };
  

  return (
    <>
      {/* parent layout container */}
      <div className="flex w-full h-screen overflow-hidden bg-white"> 

        {/* Left sidebar for navigation*/}
        <div className="bg-white sm:hidden xs:hidden hidden md:block flex-col items-center justify-center w-[13%] min-h-screen max-h-screen position-fixed top-0 left-0 relative border-r-[1px] border-[#e1e1e1]">
          
          {/* logo and title */}
          <Link to="/" className="flex flex-row items-center justify-start h-auto leading-none mt-[10px] xl:ml-[5px] py-[5px] px-[2px] w-full cursor-pointer">
            <img alt="Collection of the best design tools on the itnernet" src={logo} className="size-[25px] md:size-[20px] lg:size-[24px] xl:size-[28px] 2xl:size-[33px] ml-[10px] rotate-[5deg]"/>                    
          </Link>
          
          <div className="flex flex-row items-center justify-start w-auto h-auto ml-[10px] xl:ml-[15px] mt-[5px]">
            <circle className="size-[5px] lg:size-[7px] bg-[#00aa45] rounded-full ml-[7px] mb-[3px] animate-pulse"></circle>
            <div className="text-[13px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] ml-[5px] text-black font-Outfit font-semibold items-center justify-start">235 tools</div>
          </div>

          {/* Navigation bar */}
          <div className="flex flex-col gap-1 items-start justify-start w-auto h-full mr-[5px] mb-[10px] ml-[5px] mt-[5px] overflow-y-auto hide-scrollbar">
              
              {navItems.map(({ path, label, icon }) => (
              <NavLink
                style={({ isActive }) => ({borderLeft: isActive ? "3px solid #000000" : "none"})}
                key={path}
                className="flex flex-row items-center justify-start w-full h-auto cursor-pointer hover:bg-[#F6F6F6] p-[3px]"
                to={path}
                reloadDocument
                viewTransition
              >
                <img src={icon} alt={label} className="ml-[5px] w-size-[25px] md:size-[23px] lg:size-[27px] xl:size-[33px] 2xl:size-[37px] p-[4px] md:p-[3px] xl:p-[6px] rounded-[7px]"/>
                <span className="ml-[5px] items-start justify-center font-Outfit font-semibold text-[18px] md:text-[15px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] text-[#333333]">{label}</span>
                {location.pathname === path}
              </NavLink>
            ))}

          </div> 

          {/* Bottom section with illustration and submit button */}
          <div className="items-start justify-start absolute bottom-[20px] left-[20px] md:bottom-[10px] md:left-[5px] md:right-[5px] w-auto flex flex-col md:mx-[5px]">
            <Link to="/feedback" className="w-full flex-grow bg-white border-[1.5px] border-[#f0f0f0] md:rounded-[10px] lg:rounded-[15px] xl:rounded-[20px] 2xl:rounded-[23px] flex flex-row items-center justify-center opacity-70 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out mb-[10px]">
              <span className="md:text-[18px] lg:text-[23px] xl:text-[28px] 2xl:text-[32px] font-Outfit font-semibold">feedback</span>
            </Link>
            <Link to="/submit-a-tool" className="w-full flex-grow bg-white border-[1.5px] border-[#f0f0f0] md:rounded-[10px] lg:rounded-[15px] xl:rounded-[20px] 2xl:rounded-[23px] flex flex-row items-center justify-center opacity-70 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out">
              <img src={send} alt="submit icon" className="size-[28px] xl:size-[35px] 2xl:size-[40px] p-[5px] mr-[2px]" />
              <span className="md:text-[18px] lg:text-[23px] xl:text-[28px] 2xl:text-[32px] font-Outfit font-semibold">submit</span>
            </Link>
          </div>

        </div>

        {/* Mobile sidebar for navigation */}
        {sidebar && (
          <div className="md:hidden fixed top-0 left-0 w-[80%] sm:w-[50%] h-screen bg-white z-50 shadow-lg justify-center items-end">

            <div className="flex flex-col w-full h-auto p-[10px]">
              <div className="flex flex-row items-center justify-between w-auto h-auto">
                <Link prefetch="viewport" to="/" onClick={() => setSidebar(false)} className="flex flex-row items-center justify-start w-auto h-auto mb-[5px] p-[10px]">
                  <img src={logo} alt="design index logo" className="w-[30px] h-[30px] rotate-[5deg]" />
                </Link>
                <img onClick={() => setSidebar(false)} src={sidebar_close_icon} alt="close sidebar" className="w-[36px] h-[36px] p-[5px]"/>
              </div>

              <div className="flex flex-col items-start justify-start w-full h-auto overflow-y-auto hide-scrollbar">
                {navItems.map(({ path, label, icon }) => (
                  <Link
                    key={path}
                    to={path}
                    prefetch="viewport"
                    reloadDocument
                    className="flex items-center gap-[10px] w-full h-auto cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    onClick={() => setSidebar(false)}
                  >
                    <img src={icon} alt={label} className="w-[35px] h-[35px] border-[1.5px] border-[#EBEBEB] rounded-[8px] p-[5px]" />
                    <span className="text-[25px] font-Outfit font-semibold text-black ">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:hidden items-start justify-start w-[80vw] h-auto px-[19px] bg-white fixed bottom-[80px] left-0px">
                <div className="flex flex-row items-center justify-start w-full h-auto mb-[5px]">
                  <img src={logo} alt="design index logo" className="w-[22px] h-[22px]  sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] 2xl:h-[40px] 2xl:w-[40px] rotate-[5deg]" />
                  <span className="text-[19px] sm:text-[19px] md:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] text-black font-Fustat font-semibold ml-[5px]">design index.</span>
                </div>
                <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] text-[#575757] font-Outfit leading-4 font-medium">collection of the best design resources on the internet</p>
                <div className='flex flex-row items-center'>
                  <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium">made with</p>
                  <img src={heart} alt="Made with Love" className=" w-[15px] h-[15px] md:w-[15px] md:h-[15px] lg:w-[17px] lg:h-[17px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] mx-[2px]" />
                  <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium">by Atharv Remeshan</p>
                </div>
                <div className='flex flex-row items-center'>
                  <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium">location - Mumbai,India</p>
                  <img src={india} alt="indian flag" className="w-[15px] h-[10px]md:w-[17px] md:h-[12px] lg:w-[19px] lg:h-[14px] xl:w-[22px] xl:h-[16px] 2xl:w-[24px] 2xl:h-[18px] ml-[5px]" />
                </div>
                <div className='flex flex-row items-start justify-center mt-[5px]'>
                  <img src={twitter} loading="lazy" alt="X logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] mr-[5px] p-[5px]  shadow-sm border-[0.5px] border-[#e2e2e2] rounded-[8px]" onClick={() => window.open("https://x.com/atharv_rem", "_blank")} />
                  <img src={threads} loading="lazy" alt="Threads logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] mr-[5px] p-[5px]  shadow-sm border-[0.5px] border-[#e2e2e2] rounded-[8px]" onClick={() => window.open("https://www.threads.com/@atharv_remeshan", "_blank")} />
                  <img src={linkedin} loading="lazy" alt="LinkedIn logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] p-[5px]  shadow-sm border-[0.5px] border-[#e2e2e2] rounded-[8px]" onClick={() => window.open("https://www.linkedin.com/in/atharv-rem", "_blank")} />
                </div>
            </div>

            <Link to="/submit-a-tool" className="w-[70vw] sm:w-[45vw] h-auto px-[20px] bg-white border-[1.5px] border-[#e3e3e3] p-[2px] flex flex-row items-center justify-center fixed bottom-[20px] left-[20px] sm:left-[20px] rounded-[18px]" onClick={() => setSidebar(false)}>
                <img src={send} alt="submit icon" className="w-[25px] h-[25px]" />
                <span className="text-[25px] font-Outfit font-semibold ml-[10px]">submit a tool</span>
            </Link>
        </div>
        )}

        {/* right content area*/}
        <div className="flex-col items-center justify-center w-full md:w-[87%] p-[5px] md:p-[5px] md:px-[20px] bg-white">
          <div className="flex-row w-full hidden md:flex items-center pt-[5px] pb-[5px] gap-x-[7px]">
            <SearchBar />
            <Link to='/terms' className="flex flex-row items-center justify-start w-auto font-Outfit font-semibold border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[10px] xl:rounded-[14px] 2xl:rounded-[16px] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] px-[20px] h-[36px] md:h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] opacity-70 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out">terms</Link>
            <Link to='/about' className="flex flex-row items-center justify-start w-auto font-Outfit font-semibold border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[10px] xl:rounded-[14px] 2xl:rounded-[16px] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] px-[20px] h-[36px] md:h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] opacity-70 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out">about</Link>
            <img src={twitter} loading="lazy" alt="X logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] p-[5px] drop-shadow-md drop-shadow-neutral-100 border-[0.5px] border-[#e2e2e2] rounded-[8px] hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" onClick={() => window.open("https://x.com/atharv_rem", "_blank")} />
            <img src={threads} loading="lazy" alt="Threads logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] p-[5px] drop-shadow-md drop-shadow-neutral-100 border-[0.5px] border-[#e2e2e2] rounded-[8px] hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" onClick={() => window.open("https://www.threads.com/@atharv_remeshan", "_blank")} />
            <img src={linkedin} loading="lazy" alt="LinkedIn logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] p-[5px] drop-shadow-md drop-shadow-neutral-100 border-[0.5px] border-[#e2e2e2] rounded-[8px] hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" onClick={() => window.open("https://www.linkedin.com/in/atharv-rem", "_blank")} />
          </div>
          
          {/* Mobile header */}
          <div className="md:hidden flex flex-col items-start justify-center w-full h-auto mb-[5px] pt-[10px] px-[5px] bg-white">
              <img src={logo} alt="design index logo" className="w-[30px] h-[30px rotate-[5deg]" />
              <div className="w-full h-auto flex flex-row items-center justify-center mt-[10px]">
                <SearchBar />
                <img onClick={handleToggleSidebar} src={sidebar_icon} alt="sidebar icon" className="drop-shadow-md drop-shadow-neutral-100 border-1 border-[#ececec] rounded-[10px] p-[5px] md:hidden size-[36px] ml-[10px]" />
              </div>
          </div>

          <div key={location.pathname} className={`h-full ${should_disable_scroll ? "overflow-hidden": "overflow-y-auto hide-scrollbar"}`}>
            {/* Conditional rendering based on selected page */}
            <Outlet />
          </div>
        </div>
        
      </div>
    </>
  );
}
