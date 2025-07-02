import { useState } from "react";
import CarouselMainCard from "../about/cards/CarouselMainCard";
import CarouselSideCard from "../about/cards/CarouselSideCard";
import CarouselControls from "../about/cards/CarouselControls";

function AboutUsSectionFour() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const data = [
    {
      title: "Lorem Ipsum",
      content:
        "cursus volutpat nisl. eget vitae felis, convallis. lorem. ipsum risus orci lacus, eget quis vitae at adipiscing diam varius",
    },
    {
      title: "abc",
      content:
        "cursus volutpat nisl. eget vitae felis, convallis. lorem. ipsum risus orci lacus, eget quis vitae at adipiscing diam varius",
    },
    {
      title: "def",
      content:
        "cursus volutpat nisl. eget vitae felis, convallis. lorem. ipsum risus orci lacus, eget quis vitae at adipiscing diam varius",
    },
  ];

  const handleLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleRight = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="w-full min-h-screen font-['Roboto'] bg-white flex justify-center items-center ">
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-[25px]">
        {/* Heading Section */}
        <div className="max-w-[792px] h-[157px] w-full flex flex-col gap-[13px] items-center text-center tracking-normal">
          <div className="w-[792px] h-[60px]">
            <h1 className="text-[28px] sm:text-[36px] md:text-[51.2px] font-medium text-black leading-[100%] ">
            Impact we created
          </h1>
          </div>
          <div className="w-[792px] h-[84px]">
            <p className="text-[16px] sm:text-[18px] md:text-[24px] font-normal text-black leading-[100%]">
            we have many songs and stories to tell just be with us we have many
            songs and stories to tell just be with us we have many songs and
            stories to tell just be with us
          </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full ">
          <div className="transition-all duration-300 ease-in-out scale-95 w-full max-w-[300px]">
            <CarouselSideCard
              data={data[(currentIndex - 1 + data.length) % data.length]}
            />
          </div>

          <div className="transition-all duration-300 ease-in-out scale-100 w-full max-w-[450px]">
            <CarouselMainCard data={data[currentIndex]} />
          </div>

          <div className="transition-all duration-300 ease-in-out scale-95 w-full max-w-[300px]">
            <CarouselSideCard data={data[(currentIndex + 1) % data.length]} />
          </div>
        </div>

        {/* Navigation Buttons */}
        <CarouselControls onLeft={handleLeft} onRight={handleRight} />
      </div>
    </div>
  );
}

export default AboutUsSectionFour;
