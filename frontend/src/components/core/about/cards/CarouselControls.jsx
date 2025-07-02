import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function CarouselControls({ onLeft, onRight }) {
  return (
    <div className="w-[209px] h-[42px] flex justify-between items-center p-[9px] rounded-full border-[1px] border-black shadow-md bg-white/10">
      <button
        onClick={onLeft}
        className="w-8 h-8 flex items-center justify-center"
      >
        <FaRegArrowAltCircleLeft className="cursor-pointer" size={24}/>
      </button>

      <button
        onClick={onRight}
        className="w-8 h-8 flex items-center justify-center"
      >
        <FaRegArrowAltCircleRight className="cursor-pointer" size={24}/>
      </button>
    </div>
  );
}

export default CarouselControls;
