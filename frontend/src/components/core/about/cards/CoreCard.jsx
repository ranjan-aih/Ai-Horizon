<<<<<<< HEAD
import {motion} from "motion/react";

function CoreCard(props) {
  return props.data.map((item, index) => (
    <div className="w-[270px] h-[360px] border-[0.9px] rounded-[13.5px] bg-[#202020]" >
      <motion.div 
      whileHover={{
        rotate:-10,
        x:30,
        y:-35,
      }}
      transition={{
        duration:0.5,
      }}
=======
function CoreCard(props) {
  return props.data.map((item, index) => (
    <div
>>>>>>> e571f150a71fd7147665aea392d840dd48f69443
      key={index}
      className="w-[270px] h-[360px] border-[0.9px] rounded-[13.5px] bg-[#202020] text-white shadow-md flex flex-col items-center justify-center"
    >
      <div className="w-[152.1px] flex flex-col  justify-between gap-[11.7px]">
      <div className="w-[152.1px] h-33px text-[#F6A11F] text-[27.9px] font-semibold text-center leading-none tracking-normal">
        {item.title}
      </div>
      <div className="w-[152.1px] h-[126px] text-[18px] font-normal text-center leading-5.5 tracking-normal">
        {item.content}
      </div>
      </div>
<<<<<<< HEAD
    </motion.div>
=======
>>>>>>> e571f150a71fd7147665aea392d840dd48f69443
    </div>
  ));
}

export default CoreCard;
