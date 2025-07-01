import { FaStar } from "react-icons/fa";
import pattern from "../../../assets/pattern.svg";

function CarouselMainCard({ data }) {
  return (
    <div className="w-[450px] h-[300px] bg-gradient-to-b from-[#e6f7f7] to-[#ffffff] shadow-lg border border-black rounded-[6px] p-6 transition-all duration-300 relative flex justify-center items-center">
      <div className="w-[380px] h-[168px] flex flex-col gap-[17px] z-10 relative">
        <div className="flex justify-between items-center h-[36px] w-[380px]">
          <h2 className="text-[31px] font-semibold text-black">{data.title}</h2>
          <FaStar className="w-[22px] h-[20.92px]"/>
        </div>
        <div className="w-[380px] h-[115px] text-[20px] font-normal text-black leading-[100%]">
          {data.content}
        </div>
      </div>
      {/* Background pattern */}
      <img
        src={pattern}
        alt="pattern"
        className="absolute bottom-0 left-0 w-full object-cover h-[140px] z-0"
      />
    </div>
  );
}

export default CarouselMainCard;
