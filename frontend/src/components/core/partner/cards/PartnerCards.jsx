import ai_horizon from "../../../assets/ai_horizon_logo.png"

function PartnerCards(props) {
  return (
    <div>
      <div>Why partner with <img src={ai_horizon} alt="ai-horizon-logo" /> ?</div>
      <div>
        {props.data.map((item,index)=><div className="flex flex-col">
          <div>{item.title}</div>
          <div>{item.content}</div>

        </div>)}
      </div>
    </div>
  );
}

export default PartnerCards;


