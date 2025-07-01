import React from "react";
import bgImage from "../../../assets/homePage3Bg.jpg";
import AIHAgentTab from "./cards/AIHAgentTab";
import { div } from "framer-motion/client";

const AIHAgents = () => {
  return (
    <div
      className="relative flex justify-center items-center bg-cover bg-center w-full  h-[832px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#151515] opacity-95"></div>

      {/* <div className="flex justify-center items-center w-[1280px] h-full"> */}
      <div className="flex justify-between items-center w-[1280px] h-[832px] space-x-10">
        {/* Content on top */}
        <div className="relative z-10 flex flex-col justify-center items-center w-[345px] h-[552px] gap-20 ">
          <div className="w-full h-[180px] text-[51px] flex flex-col justify-center items-center font-roboto ">
            <h2 className=" font-bold text-[#17BCBC] text-center">
              AI<span className="text-orange-400">H</span> Agents{" "}
            </h2>
            <h2 className="font-normal text-[#FFFFFF] text-center">
              Tailored AI for Every Business
            </h2>
          </div>

          <div className="w-[295px] h-[345px] text-[19px] flex flex-col justify-center items-center text-[#FFFFFF] font-normal space-y-6">
            <p className="w-full text-center">
              AIH Agents are powerful, customizable AI solutions built on our
              proprietary AIH Studio platform. Designed to address the unique
              needs of each enterprise, these agents are secure, scalable, and
              seamlessly integrate with existing enterprise systems and
              workflows.
            </p>
            <p className="w-full text-center ">
              Built with modular architecture and domain intelligence, AIH
              Agents are categorized to deliver maximum impact—by Function and
              by Industry.
            </p>
          </div>
        </div>

        <div>
          <AIHAgentTab />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AIHAgents;
