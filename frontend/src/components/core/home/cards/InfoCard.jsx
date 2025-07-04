function InfoCard(props) {
  
   return props.data.map((item, index) => (
      <div key={index} className="text-justify p-[10px] border-[#FFFFFF] border-[1px] sm:border-[1.5px] text-[#FFFFFF] w-[324px] h-[204px] sm:w-[258px] sm:h-[426px] flex items-center justify-center font-albert sm:py-[55px] px-[19px]">
        <div className="sm:w-[220px] sm:h-[321px] flex flex-col gap-[19px] sm:gap-[30px] text-center sm: justify-between">
          <div className="w-[304px] h-[24px] sm:w-[220px] sm:h-[37px] text-[20px] sm:text-[31px]  tracking-normal font-bold sm:font-semibold leading-none">
            <h2>{item.title}</h2>
          </div>
          <div className="w-[304px] h-[140px] sm:w-[220px] sm:h-[264px]">
            <p className="text-[18px] sm:text-[22px] font-light sm:font-normal tracking-wide leading-none ">{item.content}</p>
          </div>
        </div>
      </div>
    ));
}

export default InfoCard;
