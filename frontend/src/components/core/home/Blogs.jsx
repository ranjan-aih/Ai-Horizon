import vrImage from "../../../assets/vr.png";
import robotImage from "../../../assets/robot.png";
import carImage from "../../../assets/car.png";
import armImage from "../../../assets/robotArm.png";
import { FaArrowRight } from "react-icons/fa6";

const Blogs = () => {
  return (
    <div className="relative w-full h-[832px] bg-no-repeat bg-cover flex items-center justify-center px-10">
      <div className="flex flex-col justify-center w-full max-w-[1280px] relative">
        {/* Left Side */}
        <div className="absolute left-0 top-[10%]">
          <h2 className="text-4xl font-bold mb-6">BLOGS</h2>
          <button className="bg-[#F6A11F] hover:bg-[#ff9500] text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2">
            Read More{" "}
            <span>
              <FaArrowRight size={20} />
            </span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 mt-20 ml-[555px] gap-x-5">
          {/* Left Card */}

          <div className="flex flex-col justify-center items-end">
            {/* Top Left Card */}
            <div className="col-span-1 relative z-10 ">
              <div className="w-[240px] h-[270px] bg-gradient-to-br from-[#000000] to-[#919191]  text-[#FFFFFF] text-right rounded-[2px] p-4 border-[1.5px] hover:border-[3px] hover:border-[#0085FF]">
                <h3 className="text-lg font-bold">Lets Try our new AI</h3>

                <p className="w-[190px] h-[50px] text-[14px] font-normal mt-2 mb-3">
                  Lorem ipsum amet habitasse pulvinar placerat in luctus lorem
                  vulputate.
                </p>

                <button className="text-[9px] px-[4.5px] py-[2px] rounded-[6px] border-[0.45px] font-bold bg-[#AB82BF78] border-[#FFFFFF]">
                  Read more
                </button>
                <img
                  src={vrImage}
                  alt="VR"
                  className="absolute bottom-0 left-[-98px] w-[226px] h-[226px]"
                />
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="col-span-1 relative top-[30px]">
              <div className="flex flex-col justify-between items-center">
                <div className="w-[335px] h-[217px] bg-gradient-to-br from-black via-[#200909] to-[#5c2d01] text-white p-4 rounded-[2px] flex justify-between items-start">
                  <span className="text-[9px] font-bold bg-[#DC5035] w-[60px] h-[20px] border border-[#FFFFFF] px-[4.5px] py-[2px] text-center rounded-[6px] text-[#FFFFFF]">
                    Read More
                  </span>
                  <div className="w-[198px] flex flex-col justify-start text-right">
                    <h3 className="text-lg font-bold pr-2">
                      Lets Try our new AI
                    </h3>
                    <p className="text-[13px] font-normal mt-2 w-[190px] h-[50px] ">
                      Lorem ipsum amet habitasse pulvinar placerat in luctus
                      lorem vulputate.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={carImage}
                    alt="Car"
                    className="absolute bottom-[-20px] left-[-80px] rotate-y-180 w-[397px] h-[213px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-8">
            {/* Top Right Card */}

            <div className="col-span-1 relative w-[225px] h-[225px]">
              {/* Small Glow at bottom-right */}
              <div className="absolute bottom-2 right-2 w-[80px] h-[80px] bg-[#4F49FF] rounded-[2px] blur-[60.3px] z-0" />

              {/* Card */}
              <div className="relative z-10 w-full h-full bg-gradient-to-bl from-[#000000] to-[#4F49FF] text-white p-[12px] rounded-[2px]">
                <div className="w-[153px] h-[144px] ">
                  <h3 className="text-[20px] font-bold">
                    Let's Try our new AI
                  </h3>
                  <p className="text-[13px] w-[140px] font-normal mb-3">
                    Lorem ipsum amet habitasse pulvinar placerat in luctus lorem
                    vulputate.
                  </p>
                  <button className="text-[9px] px-[4.5px] py-[2px] rounded-[6px] border-[0.45px] font-bold bg-[#3C3986] border-[#FFFFFF]">
                    Read more
                  </button>
                  <img
                    src={robotImage}
                    alt="Robot"
                    className="absolute bottom-[-80px] right-[-80px] w-[235px] h-[280px] drop-shadow-y-2xl "
                  />
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="col-span-1 top-[40px]">
              {/* Card - now relative */}
              <div className="relative z-10  w-[185px] h-[270px] bg-black text-white p-4 rounded-[2px]">
                <div className="w-[153px] h-[144px] ">
                  <div className="w-[155px] h-[55px]">
                    <h3 className="text-[14px] font-bold">
                      Let's Try our new AI
                    </h3>
                    <p className="text-[9px] font-normal mt-2 mb-3">
                      Lorem ipsum amet habitasse pulvinar placerat in luctus
                      lorem vulputate.
                    </p>
                  </div>
                  <button className="text-[8px] px-[4px] py-[1.5px] rounded-[4px] border-[0.45px] font-bold bg-[#FFCC00] border-[#FFFFFF]">
                    Read More
                  </button>

                  <div className="absolute w-[324px] h-[195px] bottom-[-3px] right-[-145px]">
                    <img
                      src={armImage}
                      alt="Robot Arm"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
