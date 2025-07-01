import React, { useState, useEffect } from "react";
import SuccessStoryCard from "./cards/SuccessStoryCard";
import { FiUser } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { IoFlashSharp } from "react-icons/io5";
import { BiBox } from "react-icons/bi";

const successData = [
  {
    count: "1000+",
    label: "Enterprise users leveraging our AI agents",
    icon: FiUser,
  },
  {
    count: "100+",
    label: "Tailor-made Agentic AI agents deployed",
    icon: BiBox,
  },
  {
    count: "10 Million+",
    label: "Cost savings achieved for enterprise clients",
    icon: FiDollarSign,
  },
  {
    count: "10,000+",
    label: "Reasoning tasks solved daily by our agents",
    icon: IoFlashSharp,
  },
];

const SuccessStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto swap every 3 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % successData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[1024px] h-[832px] flex justify-between items-center">
        <div className="flex flex-col justify-center items-start gap-2.5">
          <div className="w-[65px] h-[6px] rounded items-start bg-gradient-to-r from-[#F6A11F] to-[#AD10FF]"></div>
          <div className="w-[430px] text-black font-medium text-[51px]">
            <h1>OUR SUCCESS STORIES</h1>
          </div>
          <div className="w-[430px] h-[140px] text-black  font-normal text-2xl">
            we have many songs and stories to tell just be with us we have many
            songs and stories to tell just be with us we have many songs and
            stories to tell just be with us
          </div>
        </div>

        <div className="border border-[border-[#B3B3B3] rounded-[31px] -rotate-12 ">
          <div className="border border-[border-[#B3B3B3] rounded-[31px] -rotate-12 ">
            <div className="border border-[border-[#B3B3B3] rounded-[31px] -rotate-12 ">
              <div className="border border-[border-[#B3B3B3] rounded-[31px] -rotate-12 ">
                <span className="rotate-0">
                  <SuccessStoryCard {...successData[currentIndex]} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiUser } from "react-icons/fi";
// import SuccessStoryCard from "./cards/SuccessStoryCard";

// const successData = [
//   {
//     count: "1000+",
//     label: "Enterprise users leveraging our AI agents",
//     icon: FiUser,
//   },
//   {
//     count: "99%",
//     label: "Customer satisfaction rate",
//     icon: FiUser,
//   },
//   {
//     count: "50+",
//     label: "AI solutions deployed globally",
//     icon: FiUser,
//   },
// ];

// const SuccessStory = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto swap every 3 seconds (optional)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % successData.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex justify-center items-center px-4 py-20 bg-white">
//       <div className="max-w-[1024px] w-full flex flex-col md:flex-row justify-between items-center gap-10">
//         {/* Left Content */}
//         <div className="flex flex-col gap-6 max-w-[500px]">
//           <div className="w-[65px] h-[6px] rounded bg-gradient-to-r from-[#F6A11F] to-[#AD10FF]"></div>
//           <h2 className="text-black text-4xl font-bold leading-tight">
//             OUR SUCCESS STORIES
//           </h2>
//           <p className="text-[#333] text-lg font-normal leading-relaxed">
//             At ai-horizon.io, we design and deploy custom AI agents that enable
//             enterprises to become truly AI-ready. These intelligent agents are
//             built to streamline operations, enhance decision-making, and deliver
//             measurable business impact. Our advanced Agentic AI technology
//             ensures our clients stay ahead in an increasingly competitive
//             digital landscape.
//           </p>
//         </div>

//         {/* Right Content - Animated Single Card */}
//         <div className="relative w-[311px] h-[311px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.5 }}
//               className="absolute top-0 left-0 w-full h-full"
//             >
//               <SuccessStoryCard {...successData[currentIndex]} />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuccessStory;
