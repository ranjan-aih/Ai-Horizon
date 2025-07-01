import React from "react";
import "../../../css/Partner1.css";

const Partner1 = () => {
    return (
        <div
            className="!w-full !h-screen !bg-white !flex !flex-col !items-center !justify-start !pt-[120px] !font-sans !relative">
            <div className="max-w-[800px] w-full text-center px-[20px]">
                <div className="!mb-[60px]">

                    <p className="text-[#FF8C42] text-[14px] font-semibold tracking-[1.5px] uppercase mb-[10px]">
                        AI HORIZON'S PARTNER PROGRAM
                    </p>

                    <h1 className="text-[#1a1a1a] text-[48px] font-bold leading-[1.2] tracking-[-0.5px] mb-[10px]">
                        Building Success Together
                    </h1>

                    <p className="text-[#4a4a4a] text-[18px] font-normal leading-[1.5] m-0">

                        Become a partner with AIH and lead the agentic AI
                        <br/>
                        revolution
                    </p>
                </div>

                <div className="mt-[25px]">

                    <button className="pt1-partner-button">Become a Partner</button>
                </div>
            </div>
            <div className="pt1-half-rectangle"></div>

            <div className="pt1-half-rectangle">
                <div className="pt1-squares-container">
                    <div className="pt1-square"></div>
                    <div className="pt1-square"></div>
                    <div className="pt1-square"></div>
                    <div className="pt1-square"></div>
                    <div className="pt1-square"></div>
                    <div className="pt1-square"></div>
                </div>

                <div className="text-center mt-[30px]">
                    <p className="text-[2.8rem] font-medium text-[#1a1a1a] m-0">
                        Why partner with{" "}
                        <span className="text-[1.1em] font-normal tracking-[1px] text-[#008080]">
    ai-
  </span>
                        <span className="text-[1.1em] font-normal tracking-[1px] text-[#FFAC1C]">
    horizon
  </span>
                        <span className="text-[1.1em] font-normal tracking-[1px] text-[#008080]">
    .io
  </span>
                        ?
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Partner1;
