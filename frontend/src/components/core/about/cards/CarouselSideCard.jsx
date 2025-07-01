import pattern from "../../../assets/pattern.svg"

function CarouselSideCard({ data }) {
  return (
    <div className="w-[300px] h-[200px] bg-gradient-to-b from-[#e6f7f7] to-[#ffffff]  border border-black shadow-md rounded-[6px] flex flex-col justify-center pl-8 relative">
      <div className="text-[20px] font-semibold text-black z-10 relative">
        {data.title}
      </div>
      {/* Background pattern */}
      <img
        src={pattern}
        alt="pattern"
        className="absolute bottom-0 left-0 w-full object-cover h-[70px] z-0"
      />
    </div>
  );
}

export default CarouselSideCard;
