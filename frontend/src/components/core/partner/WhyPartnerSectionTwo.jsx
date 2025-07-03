import ai_horizon from '../../../assets/ai-horizon.svg';
import PartnerCards from '../partner/cards/PartnerCards'

function WhyPartnerSectionTwo() {
  const data = [
    {
      title: "Commission Payout",
      content:
        "Enjoy flat, recurring commissions for the entire duration of each customer contract—ensuring stable, long-term revenue.",
    },
    {
      title: "Agent Framework",
      content:
        "Leverage our battle-tested frameworks for building reliable, scalable, and intelligent AI agents tailored to enterprise needs.",
    },
    {
      title: "Become Market leader",
      content:
        "The future is AI, and industries are moving fast. Partnering early positions you as a market leader and AI transformation pioneer.",
    },
    {
      title: "Accelerate AI Deployment",
      content:
        "Launch generative AI solutions in days—not months—using our pre-built modules, robust SDKs, and simplified integration tools.",
    },
    {
      title: "Exclusive Technical Support",
      content:
        "Access our expert engineering and solution architecture teams for ongoing support.",
    },
    {
      title: "Co-Selling",
      content:
        "Collaborate with us on go-to-market efforts, customer engagement, and joint sales initiatives through our co-selling program.",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      
      <div className="w-full max-w-[1280px] h-[830px] rounded-[60px] bg-[#E9E9E9] flex flex-col justify-center items-center ">
        {/* Heading */}
      <div className="w-[757px] h-[60px] flex flex-wrap justify-center text-center items-center text-[28px] md:text-[51.2px] lg:text-[48px] font-['Roboto'] font-medium">
        Why partner with
        <img
          src={ai_horizon}
          alt="ai-horizon-logo"
          className="w-[150px] md:w-[334px] md:h-[52.15px] lg:w-[240px]"
        />
        ?
      </div>
        <PartnerCards data={data} />
      </div>
    </div>
  );
}

export default WhyPartnerSectionTwo;
