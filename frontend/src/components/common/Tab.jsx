// import React, { useState } from "react";
// import { MdOutlineArrowForward, MdOutlineArrowUpward } from "react-icons/md";

// const Tab = () => {
//   const [activeTab, setActiveTab] = useState("FUNCTION");
//   const [activeSubTab, setActiveSubTab] = useState("Marketing");

//   const functionTabs = ["Marketing", "Sales", "Customer", "Sceaper", "HR"];

//   return (
//     <div className="mt-10 flex items-center justify-center px-4 py-10 text-white font-sans">
//       <div
//         className={`flex items-start gap-10 relative transition-all duration-500 ${
//           activeTab === "FUNCTION" ? "flex-row" : "flex-row-reverse"
//         }`}
//       >
//         {/* Top Tabs */}
//         <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[588px] h-[42px] flex border-2 border-white rounded-xl overflow-hidden z-10">
//           {["FUNCTION", "INDUSTRY"].map((tab) => (
//             <button
//               key={tab}
//               className={`w-1/2 px-8 py-2 text-sm font-semibold transition-all duration-300 ${
//                 activeTab === tab ? "bg-white text-black" : "text-white"
//               }`}
//               onClick={() => {
//                 setActiveTab(tab);
//                 if (tab === "FUNCTION") setActiveSubTab("Marketing");
//               }}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Left Panel */}
//         {activeTab === "FUNCTION" && (
//           <div className="bg-[#000000] p-5 rounded-xl w-[850px] h-[405px] border-[1px] border-[#E2E2E2] mt-8">
//             {/* Sub Tabs */}
//             <div className="flex gap-2 flex-wrap mb-4 w-[435px] h-[41px] border-[1px] border-[#FFFFFF] rounded-[15px] ">
//               {functionTabs.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => setActiveSubTab(item)}
//                   className={` px-4 rounded-[15px] text-sm font-medium ${
//                     activeSubTab === item
//                       ? "bg-[#FFFFFF] text-black"
//                       : "text-[#FFFFFF]"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>

//             {/* List Items */}
//             <div className="w-[371px] h-[210px] space-y-[19px]">
//               {Array(4)
//                 .fill("LOREM IPSUM")
//                 .map((text, index) => (
//                   <div
//                     key={index}
//                     className="flex justify-between items-center border-t border-white/20 pt-3"
//                   >
//                     <span className="text-sm">{text}</span>
//                     <span className="text-lg rotate-[30deg]">
//                       <MdOutlineArrowUpward size={24} />
//                     </span>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         )}

//         {/* Right Panel */}
//         <div className="absolute right-0 top-0 -translate-x-[14%] bg-[#FFFFFF] text-black rounded-[13.5px] w-[352px] h-[451px] shadow-lg z-0">
//           <div className="flex flex-col justify-center items-center w-[273px] h-full mx-auto space-y-[25px] pt-10">
//             <div className="flex justify-center items-center">
//               <h2 className="text-[46.08px] font-medium">INDUSTRY</h2>
//             </div>
//             <div className="w-[273px] h-[189px]">
//               <p className="font-normal text-[#000000] leading-relaxed text-center">
//                 Lorem ipsum ullamcorper leo ultricies tempor lacus pellentesque
//                 et lacus risus habitant turpis est sed vel tempor duis sodales
//                 risus congue vitae justo auctor donec orci condimentum a eu
//                 ornare orci augue dolor sed laoreet proin gravida viverra orci
//                 eu sit nullam .
//               </p>
//             </div>
//             <button className="flex justify-center items-center gap-2 w-[123px] h-[44px] mt-8 px-5 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium transition">
//               Try Once <MdOutlineArrowForward />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tab;

// ..............................

import React, { useState } from "react";
import { MdOutlineArrowForward, MdOutlineArrowUpward } from "react-icons/md";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("FUNCTION");
  const [activeSubTab, setActiveSubTab] = useState("Marketing");

  const functionTabs = ["Marketing", "Sales", "Customer", "Sceaper", "HR"];

  return (
    <div className="mt-10 flex items-center justify-center px-4 py-10 text-white font-sans w-[765px] h-[472px]">
      <div
        className={`flex items-start gap-10 relative transition-all duration-500 ${
          activeTab === "FUNCTION" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Top Tabs */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[588px] h-[42px] flex border-2 border-white rounded-xl overflow-hidden z-10">
          {["FUNCTION", "INDUSTRY"].map((tab) => (
            <button
              key={tab}
              className={`w-1/2 px-8 py-2 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab ? "bg-white text-black" : "text-white"
              }`}
              onClick={() => {
                setActiveTab(tab);
                if (tab === "FUNCTION") setActiveSubTab("Marketing");
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="flex justify-center items-center bg-[#000000] p-5 rounded-xl w-[850px] h-[405px] border-[1px] border-white mt-8 transition-all duration-500">
          {/* Sub Tabs */}
          <div>
            <div className="flex gap-2 flex-wrap mb-4 w-[435px] h-[41px]">
              {functionTabs.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSubTab(item)}
                  className={` px-4 rounded-full text-sm font-medium ${
                    activeSubTab === item ? "bg-white text-black" : "text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* List Items */}
            <div className="w-[371px] h-[210px] space-y-[19px]">
              {Array(4)
                .fill("LOREM IPSUM")
                .map((text, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-t border-white/20 pt-3"
                  >
                    <span className="text-sm">{text}</span>
                    <span className="text-lg rotate-[30deg]">
                      <MdOutlineArrowUpward size={24} />
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* INDUSTRY Panel */}
          <div className="bg-[#FFFFFF] text-black rounded-[13.5px] w-[352px] h-[451px] shadow-lg transition-all duration-500">
            <div className="flex flex-col justify-center items-center w-[273px] h-full mx-auto space-y-[25px] pt-10">
              <div className="flex justify-center items-center">
                <h2 className="text-[46.08px] font-medium">INDUSTRY</h2>
              </div>
              <div className="w-[273px] h-[189px]">
                <p className="font-normal text-[#000000] leading-relaxed text-center">
                  Lorem ipsum ullamcorper leo ultricies tempor lacus
                  pellentesque et lacus risus habitant turpis est sed vel tempor
                  duis sodales risus congue vitae justo auctor donec orci
                  condimentum a eu ornare orci augue dolor sed laoreet proin
                  gravida viverra orci eu sit nullam .
                </p>
              </div>
              <button
                className="flex justify-center items-center gap-2 w-[123px] h-[44px] mt-8 px-5 py-2 rounded-full text-black text-sm font-medium transition 
  bg-gradient-to-r from-[#F6A11F80] to-[#FF950080] hover:from-[#F6A11F] hover:to-[#FF9500]"
              >
                Try Once <MdOutlineArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
