function LearnMoreButton(props) {
   return (
      <div className="w-[138px] h-[44px] cursor-pointer border-[1px] border-[#FFFFFF] rounded-[115px] flex justify-center items-center text-[#FFFFFF] py-[10px] px-[13px] font-albert gap-[8px]">
        <div className="w-[80px] h-[18px] font-medium text-[16.4px] leading-none tracking-normal">{props.text}</div>
        <div className="h-[24px] w-[24px] ">{props.element}</div>
      </div>
    );
}

export default LearnMoreButton;
