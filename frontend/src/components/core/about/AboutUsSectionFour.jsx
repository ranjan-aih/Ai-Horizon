import { useState } from "react";
import CarouselMainCard from "./cards/CarouselMainCard";
import CarouselSideCard from "./cards/CarouselSideCard";
import CarouselControls from "./cards/CarouselControls";

function AboutUsSectionFour() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const data = [
    {
      title: "1,000+ Active Users",
      content:
        "AI agents built on the AIH Studio platform serve 1,000+ daily users, automating tasks, boosting efficiency, and delivering business results across departments.",
    },
    {
      title: "100+ AI Agents",
      content:
        "We’ve built 100+ AI agents that solve targeted problems, improving accuracy, reducing costs, and accelerating productivity.",
    },
    {
      title: "$10M+ in Savings ",
      content:
        "Our AI solutions have streamlined operations and automated manual tasks, resulting in over $10 million in client savings.",
    },
    {
      title: "10,000+ Reasoning Processes Daily",
      content:
        "Our AI solutions have streamlined operations and automated manual tasks, resulting in over $10 million in client savings.",
    },
  ];

  const handleLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleRight = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className=" w-full h-[550px] md:h-[832px] font-roboto bg-white flex justify-center items-center px-4 overflow-hidden">
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-[25px]">
        {/* Heading */}
        <div className="max-w-[792px] h-[157px] w-full flex flex-col gap-[13px] items-center text-center tracking-normal">
          <div className="sm:w-[792px] sm:h-[60px] w-[339px] h-[39px]">
            <h1 className="text-[33px] sm:text-[36px] md:text-[51.2px] font-medium text-black leading-[100%]">
              Impact we created
            </h1>
          </div>
          <div className="sm:w-[792px] sm:h-[84px] w-[300px] h-[38px]">
            <p className="text-[16px] sm:text-[18px] md:text-[24px] font-normal text-black leading-[100%]">
              Delivering Real Value Through Intelligent AI Solutions
            </p>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center gap-6 md:gap-8 w-full">
          <div className="scale-95 max-w-[300px]">
            <CarouselSideCard data={data[(currentIndex - 1 + data.length) % data.length]} />
          </div>
          <div className="scale-100 max-w-[450px]">
            <CarouselMainCard data={data[currentIndex]} />
          </div>
          <div className="scale-95 max-w-[300px]">
            <CarouselSideCard data={data[(currentIndex + 1) % data.length]} />
          </div>
        </div>

        {/* Mobile View */}
        <div className="relative w-[390px] overflow-hidden md:hidden h-[350px] flex justify-center items-center">
          {/* Side Card Left */}
          <div className="absolute left-0 -translate-x-3/4 rotate-y-[20deg] z-0">
            <CarouselSideCard data={data[(currentIndex - 1 + data.length) % data.length]} />
          </div>

          {/* Main Card */}
          <div className="z-10">
            <CarouselMainCard data={data[currentIndex]} />
          </div>

          {/* Side Card Right */}
          <div className="absolute right-0 translate-x-3/4 rotate-y-[-20deg] z-0">
            <CarouselSideCard data={data[(currentIndex + 1) % data.length]} />
          </div>
        </div>

        {/* Desktop controls only */}
        <CarouselControls onLeft={handleLeft} onRight={handleRight} />
      </div>
    </div>
  );
}

export default AboutUsSectionFour;
