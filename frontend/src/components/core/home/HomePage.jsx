import React from "react";
import TunnelSvg from "../../../assets/Tunnel.svg";

const HomePage = () => {
    return (<div
        className="min-h-screen bg-white flex items-center justify-center py-[40px] px-[20px] font-sans relative overflow-hidden">

        <div
            className="
    absolute top-0 left-0
    w-full h-full
    z-0
    pointer-events-none
    mask-[radial-gradient(ellipse_at_center,transparent_30%,black_70%)]
  "
        >
            <img
                src={TunnelSvg}
                alt=""
                className="
      w-full h-full
      object-cover
      opacity-40
      filter blur-[0.5px]
    "
            />
        </div>


        <div className="text-center max-w-[1400px] w-full relative z-[1] transform -translate-y-10">

            <h1 className="!text-[3.5rem] !font-normal !text-[#1a1a1a] !leading-[1.2] !mt-[75px] !mb-[1.5rem]">

                Revolutionizing the <span
                className="
    inline-block
    text-[4rem]
    font-semibold
    leading-[1.1]
    tracking-[-0.03em]

    bg-gradient-to-r
    from-[#FFAA27]
    to-[#1DFFFF]
    bg-no-repeat
    bg-left
    bg-[length:100%_100%]

    bg-clip-text
    text-transparent
  "
            >
  GenAI
</span>
                {" "}
                development journey
            </h1>

            <p className="!text-[1.25rem] !text-[#4a4a4a] !leading-[1.6] !mx-auto !mt-0 !mb-[4rem] !font-normal !max-w-[600px]">
                <span className="text-teal-500 text-[1.1em] tracking-[1px] font-normal">ai-</span>
                <span className="text-[#FFAC1C] text-[1.1em] tracking-[1px] font-normal">horizon</span>
                <span className="text-teal-500 text-[1.1em] tracking-[1px] font-normal">.io</span> builds secured, scalable, and
                customized agentic AI solutions that helps enterprises start their AI
                journey
            </p>

            <button
                className="
    !relative
    !bg-[#F6A11F] !text-white !border-none
    !py-[12px] !px-[24px]
    !text-[1.1rem] !font-medium
    !rounded-[50px]
    !cursor-pointer
    !transition-all !duration-300 !ease-in-out
    !shadow-[0_4px_15px_rgba(45,55,72,0.2)]
    !hover:bg-[#e59400]

    before:!content-[''] before:!absolute
    before:!top-[-10px] before:!left-[-10px]
    before:!right-[-10px] before:!bottom-[-10px]
    before:!bg-white before:!rounded-[60px]
    before:!-z-10
    before:!shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.20),inset_5px_-8px_4px_0_rgba(0,0,0,0.05)]
  "
            >
                Book a Demo
            </button>

        </div>
    </div>);
};

export default HomePage;
