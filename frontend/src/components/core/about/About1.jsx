import React from "react";

const About1 = () => {
    return (<div className="!bg-white !min-h-screen !py-[60px] !px-[20px] ![font-family:Arial,sans-serif] !relative !overflow-hidden">

    <div
          className="
    absolute top-0 left-0
    w-full h-full
    z-0
    pointer-events-none
    opacity-60

    bg-[url('/grid.svg')]
    bg-[length:800px_800px]
    bg-repeat
    bg-left-top

    mask-[radial-gradient(ellipse_at_center,black_30%,transparent_70%)]
  "
      >
        <img src="/grid.svg" alt="" className="hidden" />
      </div>


      <div className="!max-w-[1200px] !mx-auto !px-[40px] !relative !z-[1]">

      <h2 className="text-[#ff8c00] text-[14px] font-semibold tracking-[1.5px] uppercase mb-[20px] mt-[50px]">
                    EMPOWERING ENTERPRISES TO BUILD, LAUNCH, AND SCALE WITH GENERATIVE AI
                </h2>

              <h1 className="!text-black !text-[50px] !font-bold !leading-[1.1] !mb-[30px] !mt-0 !tracking-[-1px]">
                What are we?
              </h1>

              <p className="!text-[#333333] !text-[22px] !leading-[1.6] !mb-[30px] !mt-0 !font-normal !text-justify !max-w-[90%]">

              At, <span className="text-teal-500 text-[1.1em] tracking-[1px] font-normal">ai-</span>
                  <span className="text-[#FFAC1C] text-[1.1em] tracking-[1px] font-normal">horizon</span>
                  <span className="text-teal-500 text-[1.1em] tracking-[1px] font-normal">.io</span> we are redefining how AI agents
                    are created and deployed in complex enterprise environments. We
                    recognize the challenges that organizations face in operationalizing
                    AI-speed, scale, and security-we have built a platform that addresses
                    them all.
                </p>
              <p className="!text-[#333333] !text-[22px] !leading-[1.6] !mb-[30px] !mt-0 !font-normal !text-justify !max-w-[90%]">

              Our mission is simple yet powerful: to make enterprises AI-ready
                    through intuitive, scalable, and secure generative AI solutions.
                </p>

          <button
              className="
    !inline-flex !items-center !gap-[8px]
    !bg-black !text-white !border-none
    !rounded-[50px]
    !py-[18px] !px-[35px]
    !text-[16px] !font-medium
    !cursor-pointer
    !transition-all !duration-300 !ease-in-out
    !transform
    !hover:bg-[#333333]
    !hover:-translate-y-0.5
    !hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]
    !active:translate-y-0
  "
          >Read More →</button>
            </div>
        </div>);
};

export default About1;
