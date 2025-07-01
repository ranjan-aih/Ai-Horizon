import React from "react";
// import bgImage from "../../../assets/homePage3Bg.jpg";
import AIHAgentTab from "./cards/AIHAgentTab";
// import { div } from "framer-motion/client";

const AIHAgents = () => {
  return (
    <div
      className="w-screen h-[832px] flex justify-center items-center"
      style={{
        backgroundImage: 'url("/AIH-AgentsBg.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // try "100% 100%" for exact scaling
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-center w-[1280px] h-[832px] space-x-10">
        {/* Left content */}
        <div className="flex flex-col justify-center items-center w-[345px] h-[552px] gap-20">
          <div className="w-full h-[180px] text-[51px] flex flex-col justify-center items-center font-roboto">
            <h2 className="font-bold text-[#17BCBC] text-center">
              AI<span className="text-orange-400">H</span> Agents
            </h2>
            <h2 className="font-normal text-white text-center">
              Tailored AI for Every Business
            </h2>
          </div>

          <div className="w-[295px] h-[345px] text-[19px] text-white space-y-6 text-center">
            <p>
              AIH Agents are powerful, customizable AI solutions built on our
              proprietary AIH Studio platform...
            </p>
            <p>Built with modular architecture and domain intelligence...</p>
          </div>
        </div>

        {/* Right Component */}
        <AIHAgentTab />
      </div>
    </div>
  );
};

export default AIHAgents;
