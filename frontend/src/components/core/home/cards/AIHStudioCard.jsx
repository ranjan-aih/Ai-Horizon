// import React from "react";
// import { FaRegSquare } from "react-icons/fa6";

// const cards = [
//   {
//     logo: <FaRegSquare />,
//     title: "PRIVATE",
//     desc: "Built with industry-standard encryption and compliance-ready frameworks to ensure your enterprise data remains fully protected.",
//     color: "text-green-400",
//   },
//   {
//     logo: <FaRegSquare />,
//     title: "ROBUST SDK",
//     desc: "Full-stack SDKs and API kits accelerate development and integration—allowing engineering teams to focus on innovation, not infrastructure.",
//     color: "text-cyan-400",
//   },
//   {
//     logo: <FaRegSquare />,
//     title: "LLMOPS",
//     desc: "End-to-end operational tooling for managing large language models in production, including versioning, monitoring, and performance tuning.",
//     color: "text-pink-400",
//   },
//   {
//     logo: <FaRegSquare />,
//     title: "WORKFLOW INTEGRATION",
//     desc: "Easily integrates into existing enterprise ecosystems—CRMs, ERPs, cloud platforms, and more—with full customization flexibility.",
//     color: "text-cyan-400",
//   },
//   {
//     logo: <FaRegSquare />,
//     title: "SECRET KEY",
//     desc: "Manage access and credentials with secure role-based secret key infrastructure.",
//     color: "text-yellow-400",
//   },
//   {
//     logo: <FaRegSquare />,
//     title: "AGENT LIBRARY",
//     desc: "Accelerate time-to-value with a growing collection of preconfigured agents for common business tasks.",
//     color: "text-pink-400",
//   },
// ];

// const Page5Card = () => {
//   return (
//     <div className="border border-[#000000] w-[202.64px] h-[225.75px] p-[5px]">
//       <div className="flex justify-center items-center w-full h-full bg-[#000000]">
//         <div className="flex flex-col justify-center items-center gap-4 w-[143px] h-[146.4px]">
//           <div className="w-[24px]">
//             <FaRegSquare className="text-white" size={24} />
//           </div>
//           <div className="h-[21px] text-center text-[18px] font-medium text-[#00D458] uppercase">
//             private
//           </div>
//           <div className="h-[65px] font-normal text-[11px] text-[#FFFFFF] text-center">
//             Built with industry-standard encryption and compliance-ready
//             frameworks to ensure your enterprise data remains fully protected.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page5Card;

import React from "react";
import { FaRegSquare } from "react-icons/fa6";

const cards = [
  {
    logo: <FaRegSquare className="text-white" size={24} />,
    title: "PRIVATE",
    desc: "Built with industry-standard encryption and compliance-ready frameworks to ensure your enterprise data remains fully protected.",
    color: "text-[#00D458]",
  },
  {
    logo: <FaRegSquare className="text-white" size={24} />,
    title: "ROBUST SDK",
    desc: "Full-stack SDKs and API kits accelerate development and integration—allowing engineering teams to focus on innovation, not infrastructure.",
    color: "text-cyan-400",
  },
  {
    logo: <FaRegSquare className="text-white" size={24} />,
    title: "LLMOPS",
    desc: "End-to-end operational tooling for managing large language models in production, including versioning, monitoring, and performance tuning.",
    color: "text-pink-400",
  },
  {
    logo: <FaRegSquare className="text-white" size={24} />,
    title: "WORKFLOW INTEGRATION",
    desc: "Easily integrates into existing enterprise ecosystems—CRMs, ERPs, cloud platforms, and more—with full customization flexibility.",
    color: "text-cyan-400",
  },
  {
    logo: <FaRegSquare className="text-white" size={24} />,
    title: "SECRET KEY",
    desc: "Manage access and credentials with secure role-based secret key infrastructure.",
    color: "text-yellow-400",
  },
  {
    logo: <FaRegSquare className="text-white" size={24} />,
    title: "AGENT LIBRARY",
    desc: "Accelerate time-to-value with a growing collection of preconfigured agents for common business tasks.",
    color: "text-pink-400",
  },
];

const AIHStudioCard = () => {
  return (
    <div className="relative min-h-screen bg-white px-8 py-12">
      {/* Background Vertical Lines */}
      <div className="absolute inset-0 z-0">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="border-l border-gray-300"
            style={{
              position: "absolute",
              top: "6px",
              height: "866px",
              width: "1px",
              backgroundColor: "#B3B3B3",
              opacity: 0.5,
              left: `${(i + 1) * (593 / 10)}px`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-center">
        {/* Cards Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-[600px]">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-[#000000] w-[202.64px] h-[225.75px] p-[5px]"
            >
              <div className="flex justify-center items-center w-full h-full bg-[#000000]">
                <div className="flex flex-col justify-center items-center gap-4 w-[143px] h-[146.4px]">
                  {/* Icon */}
                  <div className="w-[24px]">{card.logo}</div>

                  {/* Title */}
                  <div
                    className={`h-[21px] text-center text-[18px] font-medium uppercase ${card.color}`}
                  >
                    {card.title}
                  </div>

                  {/* Description */}
                  <div className="h-[65px] font-normal text-[11px] text-[#FFFFFF] text-center">
                    {card.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Text Section */}
        <div className="text-black max-w-md space-y-4">
          <p className="text-sm text-yellow-500 font-semibold">
            DEVELOP GEN-AI APPLICATION USING
          </p>
          <h1 className="text-3xl font-bold">AIH Studio</h1>
          <p className="underline text-sm">
            Your Enterprise Platform for Building Custom Generative AI
            Applications
          </p>
          <p className="text-sm underline">
            AIH Studio is the flagship enterprise platform from AI Horizon,
            purpose-built to empower businesses in developing secure, scalable,
            and intelligent AI agents tailored to their unique needs.
          </p>
          <p className="text-sm underline">
            Whether you're building from scratch or extending with prebuilt
            components, AIH Studio provides everything you need—from powerful
            SDKs to enterprise-grade security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIHStudioCard;
