import React, {useState, useEffect} from "react";
import "../../../css/ThankYou.css";

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

                <button className="return-button" onClick={handleReturnHome}>
                    Return to Homepage
                </button>

                <p className="text-base text-gray-600 m-0 font-normal">
                    You will be automatically redirected to home page in {countdown} sec.
                </p>
            </div>
        </div>
    );
};

export default ThankYou;
