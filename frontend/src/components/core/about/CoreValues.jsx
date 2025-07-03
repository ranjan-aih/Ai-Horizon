<<<<<<< HEAD
import React from 'react';
import { BsFillPersonFill, BsGraphUpArrow } from 'react-icons/bs';

const CoreValues = () => {
  return (
    <div className='!bg-white !min-h-screen !py-[80px] !px-[20px] ![font-family:Arial,sans-serif]'>
      <div className='!max-w-[1200px] !mx-auto !text-center'>
        <h1 className='!text-black !text-[50px] !font-semibold !leading-[1.2] !mb-[20px] !mt-[50px] !tracking-[-1px]'>
          Our Core Values
        </h1>

        <p className='!text-[#333333] !text-[25px] !leading-[1.6] !font-normal !max-w-[800px] !mx-auto !mt-0 !mb-[40px] !text-center'>
          At ai-horizon.io, our values shape every decision, every innovation,
          and every partnership. We are committed to building a better future
          through excellence, integrity, and an unwavering focus on progress. We
          hold ourselves and each other to the highest standards to create
          meaningful impact.
        </p>

        <div className='!grid !grid-cols-4 !gap-[5px] !max-w-[900px] !mx-auto'>
          <div className='!bg-transparent !py-[20px] !px-[10px] !text-center'>
            <div className='!w-[60px] !h-[60px] !bg-[#ff8c00] !rounded-full !flex !items-center !justify-center !mt-0 !mb-[20px] !mx-auto !transition-none'>
              <BsGraphUpArrow className='!w-[30px] !h-[30px] !text-white' />
            </div>

            <h3 className='!text-black !text-[20px] !font-medium !mt-0 !mb-[15px]'>
              Growth
            </h3>

            <p className='!text-black !text-[16px] !leading-[1.6] !mt-0 !mb-[30px] !font-normal'>
              We embrace a mindset of continuous learning. Rather than "knowing
              it all", we believe in "learning it all" - growing with our
              clients and evolving with the industry.
            </p>
          </div>

          <div className='!bg-transparent !py-[20px] !px-[10px] !text-center'>
            <div className='!w-[60px] !h-[60px] !bg-[#ff8c00] !rounded-full !flex !items-center !justify-center !mt-0 !mb-[20px] !mx-auto !transition-none'>
              <BsFillPersonFill className='!w-[30px] !h-[30px] !text-white' />
            </div>

            <h3 className='!text-black !text-[20px] !font-medium !mt-0 !mb-[15px]'>
              Trust
            </h3>

            <p className='!text-black !text-[16px] !leading-[1.6] !mt-0 !mb-[30px] !font-normal'>
              We operate with transparency, integrity, and mutual respect -
              earning the trust of our clients, partners, and team members.
            </p>
          </div>

          <div className='!bg-transparent !py-[20px] !px-[10px] !text-center'>
            <div className='!w-[60px] !h-[60px] !bg-[#ff8c00] !rounded-full !flex !items-center !justify-center !mt-0 !mb-[20px] !mx-auto !transition-none'>
              <svg
                className='!w-[30px] !h-[30px] !text-white'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z' />
              </svg>
            </div>

            <h3 className='!text-black !text-[20px] !font-medium !mt-0 !mb-[15px]'>
              Innovation
            </h3>

            <p className='!text-black !text-[16px] !leading-[1.6] !mt-0 !mb-[30px] !font-normal'>
              We challenge convention and build what hasn't been built before.
              By pushing the boundaries of what's possible, we redefine the
              future of enterprise AI.
            </p>
          </div>

          <div className='!bg-transparent !py-[20px] !px-[10px] !text-center'>
            <div className='!w-[60px] !h-[60px] !bg-[#ff8c00] !rounded-full !flex !items-center !justify-center !mt-0 !mb-[20px] !mx-auto !transition-none'>
              <BsFillPersonFill className='!w-[30px] !h-[30px] !text-white' />
            </div>

            <h3 className='!text-black !text-[20px] !font-medium !mb-[15px] !mt-0'>
              Dedication
            </h3>

            <p className='!text-black !text-[16px] !leading-[1.6] !m-0 !font-normal'>
              Your success is our priority. Every solution we design is rooted
              in a deep commitment to enabling your business to thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
=======
import React from "react";
import {BsFillPersonFill, BsGraphUpArrow} from "react-icons/bs";

const CoreValues = () => {
    return (<div className="!bg-white !min-h-screen !py-[80px] !px-[20px] ![font-family:Arial,sans-serif]">
        <div className="!max-w-[1200px] !mx-auto !text-center">
            <h1 className="!text-black !text-[50px] !font-semibold !leading-[1.2] !mb-[20px] !mt-[50px] !tracking-[-1px]">
                Our Core Values
            </h1>


            <p className="!text-[#333333] !text-[25px] !leading-[1.6] !font-normal !max-w-[800px] !mx-auto !mt-0 !mb-[40px] !text-center">

                At ai-horizon.io, our values shape every decision, every innovation,
                and every partnership. We are committed to building a better future
                through excellence, integrity, and an unwavering focus on progress. We
                hold ourselves and each other to the highest standards to create
                meaningful impact.
            </p>

            <div className="!grid !grid-cols-4 !gap-[5px] !max-w-[900px] !mx-auto">
                <div className="!bg-transparent !py-[20px] !px-[10px] !text-center">
                    <div
                        className="!w-[60px] !h-[60px] !bg-[#ff8c00] !rounded-full !flex !items-center !justify-center !mt-0 !mb-[20px] !mx-auto !transition-none">
                        <BsGraphUpArrow className="!w-[30px] !h-[30px] !text-white"/>
                    </div>

                    <h3 className="!text-black !text-[20px] !font-medium !mt-0 !mb-[15px]">
                        Growth
                    </h3>

                    <p className="!text-black !text-[16px] !leading-[1.6] !mt-0 !mb-[30px] !font-normal">

                        We embrace a mindset of continuous learning. Rather than "knowing
                        it all", we believe in "learning it all" - growing with our
                        clients and evolving with the industry.
                    </p>
                </div>

                <div className="!bg-transparent !py-[20px] !px-[10px] !text-center">
                    <div
                        className="!w-[60px] !h-[60px] !bg-[#ff8c00] !rounded-full !flex !items-center !justify-center !mt-0 !mb-[20px] !mx-auto !transition-none">
                        <BsFillPersonFill className="!w-[30px] !h-[30px] !text-white"/>
                    </div>

                    <h3 className="!text-black !text-[20px] !font-medium !mt-0 !mb-[15px]">
                        Trust
                    </h3>

                    <p className="!text-black !text-[16px] !leading-[1.6] !mt-0 !mb-[30px] !font-normal">


                        We operate with transparency, integrity, and mutual respect -
                        earning the trust of our clients, partners, and team members.
                    </p>
                </div>

                <div className="!bg-transparent !py-[20px] !px-[10px] !text-center">
                    <div
                        className="!w-[60px] !h-[60px] !bg-[#ff8c00] !rounded-full !flex !items-center !justify-center !mt-0 !mb-[20px] !mx-auto !transition-none">
                        <svg
                            className="!w-[30px] !h-[30px] !text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                        </svg>
                    </div>

                    <h3 className="!text-black !text-[20px] !font-medium !mt-0 !mb-[15px]">
                        Innovation
                    </h3>

                    <p className="!text-black !text-[16px] !leading-[1.6] !mt-0 !mb-[30px] !font-normal">

                        We challenge convention and build what hasn't been built before.
                        By pushing the boundaries of what's possible, we redefine the
                        future of enterprise AI.
                    </p>
                </div>

                <div className="!bg-transparent !py-[20px] !px-[10px] !text-center">
                    <div
                        className="!w-[60px] !h-[60px] !bg-[#ff8c00] !rounded-full !flex !items-center !justify-center !mt-0 !mb-[20px] !mx-auto !transition-none">
                        <BsFillPersonFill className="!w-[30px] !h-[30px] !text-white"/>
                    </div>


                    <h3 className="!text-black !text-[20px] !font-medium !mb-[15px] !mt-0">
                        Dedication
                    </h3>

                    <p className="!text-black !text-[16px] !leading-[1.6] !m-0 !font-normal">

                        Your success is our priority. Every solution we design is rooted
                        in a deep commitment to enabling your business to thrive.
                    </p>
                </div>
            </div>
        </div>
    </div>);
>>>>>>> 6a80a088a5d82def92675c9398c85351b461b6ad
};

export default CoreValues;
