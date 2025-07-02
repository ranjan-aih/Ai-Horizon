function InfoCard(props) {
  
   return props.data.map((item, index) => (
      <div key={index} className="border-white border-[1.5px] text-white w-[258px] h-[426px] flex items-center justify-center">
        <div className="flex flex-col gap-[10px] text-center w-[220px] justify-between">
          <div className="text-[31px]  tracking-normal font-semibold leading-[1.2]">
            <h2>{item.title}</h2>
          </div>
          <div className="w-[220px] h-[264px]">
            <p className="text-[20px] font-normal tracking-normal leading-6 ">{item.content}</p>
          </div>
        </div>
      </div>
    ));
}

export default InfoCard;
