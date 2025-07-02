import React from "react";
import Partner1 from "../components/core/partner/Partner1";
import ThankYou from "../components/core/partner/ThankYou";
import WhoShouldPartner from "../components/core/partner/WhoShouldPartner";
import WhyPartnerSectionTwo from "../components/core/partner/WhyPartnerSectionTwo";

const Partner = () => {
  return (
    <div>
      <Partner1 />
      <WhyPartnerSectionTwo />
      <WhoShouldPartner />
      <ThankYou />
    </div>
  );
};

export default Partner;
