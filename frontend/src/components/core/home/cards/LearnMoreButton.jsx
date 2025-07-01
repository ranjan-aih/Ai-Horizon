function LearnMoreButton(props) {
   return (
      <div className="w-[138px] h-[44px] cursor-pointer border-[1px] border-white rounded-[115px] flex justify-center items-center gap-1.5 text-white py-[10px] group">
        <div className="w-20 h-[18px] font-normal text-[15.36px] leading-none tracking-normal">{props.text}</div>
        <div className="h-[24px] w-[24px] ">{props.element}</div>
      </div>
    );
}

export default LearnMoreButton;
