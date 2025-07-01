import React from "react";

const WhoShouldPartner = () => {
    const partnerTypes = [
        "Consulting Firms",
        "Cloud Services Providers",
        "System Integrators (SIs)",
        "Independent Software Vendors (ISVs)",
        "Data & Analytics Companies",
        "Marketing & Growth Agencies",
    ];

    return (
        <div className="h-screen flex items-center justify-center bg-white font-sans pt-[145px] px-5 pb-[95px]">
            <div className="text-center max-w-[900px] w-full">
                <h1 className="!text-[3.5rem] !font-medium !text-[#1a1a1a] !m-0 !mb-[20px] !leading-[1.2] !tracking-[-0.02em]">Who
                    should partner with us?</h1>

                <p className="!text-[1.5rem] !text-[#333333] !mb-[90px] !leading-[1.6] !font-normal">
                    Our Partner Program is built for forward-thinking companies ready to lead
                    <br/>
                    the GenAI revolution. Ideal partners include:
                </p>

              <div className="w-full flex justify-center">
                <div className="flex flex-col gap-[10px] items-center max-w-[700px] w-full">


                {partnerTypes.map((partnerType, index) => (
                        <div key={index} className="w-full flex flex-col items-center gap-[15px]">

                            <span className="text-[1.25rem] font-[625] text-[#1a1a1a] text-center tracking-[-0.01em]">
  {partnerType}
</span>

                            <div className="w-full h-[2px] bg-gray-300 rounded-[1px]"></div>

                        </div>
                    ))}
                </div>
              </div>
            </div>
        </div>
    );
};

export default WhoShouldPartner;
