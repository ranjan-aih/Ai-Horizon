import React, {useState, useEffect} from "react";

const ThankYou = () => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            window.location.href = "/";
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    const handleReturnHome = () => {
        // Handle return to homepage
        console.log("Returning to homepage...");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans p-5">
            <div className="text-center max-w-[600px] w-full">
                <h1 className="text-[2.5rem] font-normal text-[#333333] m-0 mb-[10px] leading-[1.2]">
                    Thank You. Your response has been recorded,
                </h1>

                <h2 className="!text-[2.5rem] !font-normal !text-[#333333] !m-0 !mb-[60px] !leading-[1.2]">
                    Our Team will contact you soon!
                </h2>

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
    !mb-[30px]

    before:!content-[''] before:!absolute
    before:!top-[-10px] before:!left-[-10px]
    before:!right-[-10px] before:!bottom-[-10px]
    before:!bg-white before:!rounded-[60px]
    before:!-z-10
    before:!shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.20),inset_5px_-8px_4px_0_rgba(0,0,0,0.05)]
  "
                    onClick={handleReturnHome}>
                    Return to homepage
                </button>


                <p className="text-base text-gray-600 m-0 font-normal">
                    You will be automatically redirected to home page in {countdown} sec.
                </p>
            </div>
        </div>
    );
};

export default ThankYou;
