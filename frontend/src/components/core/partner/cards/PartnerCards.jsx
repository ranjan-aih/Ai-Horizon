// import ai_horizon from "../../../assets/ai_horizon_logo.png"
import ai_horizon from '../../../../assets/aih_logo.png';

function PartnerCards({ data }) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Cards */}
      <div className="w-[1043px] h-[191px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] justify-items-center font-['Albert Sans']">
        {data.map((item, index) => (
          <div
            key={index} 
            className=" bg-gradient-to-b from-[#F6A11F] to-[#17BCBC] rounded-[60px] p-[2px]"
          >
            <div className="bg-white md:w-[304px] md:h-[191px]  shadow-md flex flex-col items-center justify-center text-center rounded-[60px]">
              <div className="w-[254px] h-[139px] flex flex-col justify-center items-center gap-[20px]">
                <div className="w-[187px] h-[24px] text-[20px] font-bold text-black leading-none">
                  {item.title}
                </div>
                <div className="text-[17px] w-[254px] h-[100px] text-black font-normal ">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnerCards
