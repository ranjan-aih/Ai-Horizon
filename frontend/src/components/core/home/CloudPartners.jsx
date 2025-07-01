// src/HomePageSectionThree.jsx
import LogoBelt from "../home/cards/LogoBelt";
import { GoArrowRight } from "react-icons/go";
import InfoCard from "../home/cards/InfoCard";
import LearnMoreButton from "../home/cards/LearnMoreButton";

function CloudPartners() {
  const logos = [
    { name: "Google Cloud", type: "google" },
    { name: "Azure", type: "azure" },
    { name: "Google Cloud", type: "google" },
    { name: "Azure", type: "azure" },
    { name: "Google Cloud", type: "google" },
    { name: "Azure", type: "azure" },
    { name: "Google Cloud", type: "google" },
    { name: "Azure", type: "azure" },
  ];

  const data = [
    {
      title: "200+ LLMs",
      content:
        "We support all major open-source and proprietary LLMs—trained to understand, interpret, and generate human-like language. Our platform gives you the flexibility to select the most effective model for your specific generative AI use case.",
    },
    {
      title: "Vector Databases",
      content:
        "We integrate with all leading vector databases, which store data as high-dimensional vectors. This allows our AI agents to retrieve and understand contextually relevant information at speed—powering more accurate and intelligent outputs.",
    },
    {
      title: "Major Cloud Platforms",
      content:
        "Our platform is cloud-agnostic and fully compatible with AWS, Google Cloud, Azure, and others. This ensures seamless, secure, and scalable deployment tailored to your infrastructure.",
    },
    {
      title: "Databases",
      content:
        "We connect with all major structured and unstructured data sources. Whether it's 	SQL, NoSQL, or real-time data lakes, we ensure smooth data handling, making 	your GenAI applications robust and future-ready.",
    },
  ];

  return (
    <div
      className=" flex justify-center items-center"
      style={{
        backgroundColor: "#202020",
        fontFamily: "Albert Sans, sans-serif",
      }}
    >
      <div className="h-[832px] w-[1280px] flex flex-col justify-center items-center gap-14 ">
        {/* Top Logo Belt */}
        <LogoBelt direction="right" logos={logos} />

        {/* Main Cards Section */}
        <div className="px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-[30px] justify-center flex-wrap lg:flex-nowrap">
              <InfoCard data={data} />
            </div>
          </div>
        </div>

        {/* Bottom Logo Belt */}
        <LogoBelt direction="right" logos={logos} />

        {/* Learn More Button */}
        <div className="flex justify-center pb-10">
          <LearnMoreButton
            text="Learn More"
            element={<GoArrowRight size={24} />}
          />
        </div>
      </div>
    </div>
  );
}

export default CloudPartners;
