import React from "react";

const Partner1 = () => {
    return (
        <div
            className="!w-full !h-screen !bg-white !flex !flex-col !items-center !justify-start !pt-[120px] !font-sans !relative">
            <div className="max-w-[800px] w-full text-center px-[20px]">
                <div className="!mb-[70px]">
                    <p className="text-[#FF8C42] text-[14px] font-semibold tracking-[1.5px] uppercase !mb-[15px]">
                        AI HORIZON'S PARTNER PROGRAM
                    </p>

                    <h1 className="text-[#1a1a1a] text-[48px] font-bold leading-[1.2] tracking-[-0.5px] !mb-[20px]">
                        Building Success Together
                    </h1>

                    <p className="text-[#4a4a4a] text-[18px] font-normal leading-[1.5] m-0">
                        Become a partner with AIH and lead the agentic AI
                        <br/>
                        revolution
                    </p>
                </div>

                <button
                    className="
    !relative
    !bg-[#F6A11F] !text-white !border-none
    !py-[12px] !px-[24px]
    !text-[1.1rem] !font-medium
    !rounded-[50px]
    !cursor-pointer
    !transition-all !duration-300 !ease-in-out

    !shadow-[0_6px_20px_rgba(45,55,72,0.2)]
    !ring-8 !ring-white !ring-offset-0
    !after:content-[''] !after:absolute
    !after:inset-[-12px]                           /* extends the halo */
    !after:rounded-[60px] !after:-z-10
    !after:shadow-[0_4px_25px_rgba(0,0,0,0.1)]     /* soft outer halo */

    !hover:bg-[#e59400]
    !active:translate-y-0
  "
                >
                    Become a Partner
                </button>

            </div>

            <div
                className="
    absolute
    bottom-0
    left-[110px]
    right-[110px]
    h-[42vh]
    bg-white
    border
    border-black
    rounded-t-[60px]
    shadow-[inset_0_1px_0_0_rgba(0,0,0,0.2),inset_0_-5px_0_0_rgba(0,0,0,0.05)]
  "
            >
                <div className="!flex !gap-[16px] !items-center !justify-center">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="
        !mt-[30px]
        !w-[150px] !h-[150px]
        !bg-white
        !border-[1.8px] !border-white
        !rounded-[20px]
        !shadow-[inset_0_0_0_0_rgba(246,161,31,0.2),inset_0_3.6px_16.74px_0_rgba(246,161,31,0.2),inset_0_-12.6px_13.5px_0_rgba(23,188,188,0.1)]
      "
                        />
                    ))}
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
