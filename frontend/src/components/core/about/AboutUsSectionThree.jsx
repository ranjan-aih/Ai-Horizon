import CoreCard from "../about/cards/CoreCard";

function AboutUsSectionThree() {
  const data = [
    {
      title: "Our Mission",
      content:
        "we have many songs and stories to tell just be with us we have many songs and stories to tell ",
    },
    {
      title: "Our Vision",
      content:
        "we have many songs and stories to tell just be with us we have many songs and stories to tell ",
    },
    {
      title: "Our Value",
      content:
        "we have many songs and stories to tell just be with us we have many songs and stories to tell ",
    },
  ];

  return (
    <div className="w-full h-[820px] bg-white font-['Roboto'] flex justify-center px-4 py-12">
      <div className="w-[1280px] flex flex-col items-center">
        {/* Center Title + Subtitle */}
        <div className="w-[792px] h-[157px] flex flex-col gap-[13px] items-center text-center mb-14 mt-20 md:mt-40">
          <h1 className="w-[792px] h-[60px] text-[32px] md:text-[51.2px] font-medium leading-[100%] tracking-normal text-black">
            Our Mission, Vision and Values
          </h1>
          <p className="w-[792px] h-[84px] text-[18px] md:text-[24px] font-normal leading-[100%] text-black">
            we have many songs and stories to tell just be with us we have many songs and stories to tell just be with us we have many songs and stories to tell just be with us
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-[60px] w-[930px] h-[360px]">
          <CoreCard data={data} />
        </div>
      </div>
    </div>
  );
}

export default AboutUsSectionThree;
