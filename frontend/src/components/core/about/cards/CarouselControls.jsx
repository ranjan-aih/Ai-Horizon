import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function CarouselControls({ onLeft, onRight }) {
  return (
    <div className="hidden sm:flex w-[209px] h-[42px] justify-around items-center gap-24 rounded-full border-[1px] border-black shadow-md bg-white/10">
      <button
        onClick={onLeft}
        className="w-[24px] h-[24px] flex items-center justify-center"
      >
        <FaRegArrowAltCircleLeft className="cursor-pointer" size={24}/>
      </button>

      <button
        onClick={onRight}
        className="w-[24px] h-[24px] flex items-center justify-center"
      >
        <FaRegArrowAltCircleRight className="cursor-pointer" size={24}/>
      </button>
    </div>
  );
}

export default CarouselControls;
