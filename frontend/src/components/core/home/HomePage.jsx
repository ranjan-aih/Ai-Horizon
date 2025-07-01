import React from "react";
import "../../../css/HomePage.css";
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

                <span className="ai-text">ai-</span>
                <span className="horizon-text">horizon</span>
                <span className="io-text">.io</span> builds secured, scalable, and
                customized agentic AI solutions that helps enterprises start their AI
                journey
            </p>

            <button className="cta-button">Book a Demo</button>
        </div>
    </div>);
};

export default HomePage;
