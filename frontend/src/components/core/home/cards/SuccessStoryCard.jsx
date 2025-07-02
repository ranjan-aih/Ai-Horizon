import React from "react";
import { FiUser } from "react-icons/fi";

const SuccessStoryCard = ({ icon: Icon = FiUser, count, label }) => {
  return (
    <div className="">
      <div className="w-[311px] h-[311px] flex justify-center items-center bg-primary-background rounded-[31px] ">
        <div className="text-white w-[198px] h-[205px] flex flex-col justify-center items-center gap-[47px] ">
          <div className="flex flex-col justify-center items-center w-[100px] h-[76px] gap-[8.8px] ">
            <Icon size={26} />
            <h1 className="text-3xl font-bold">{count}</h1>
          </div>
          <p className="h-[82px] font-semibold text-3xl text-center">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;

// import React from "react";
// import { FiUser } from "react-icons/fi";

// const SuccessStoryCard = ({ icon: Icon = FiUser, count, label }) => {
//   return (
//     <div className="w-[311px] h-[311px] flex justify-center items-center bg-black rounded-[31px] text-white">
//       <div className="w-[198px] h-[205px] flex flex-col justify-center items-center gap-[47px]">
//         <div className="flex flex-col justify-center items-center w-[100px] h-[76px] gap-[8.8px]">
//           <Icon size={26} />
//           <h1 className="text-3xl font-bold">{count}</h1>
//         </div>
//         <p className="h-[82px] font-semibold text-3xl text-center leading-snug">
//           {label}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SuccessStoryCard;
