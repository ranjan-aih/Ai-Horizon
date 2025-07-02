import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineArrowForward, MdOutlineArrowUpward } from 'react-icons/md';
import { div } from 'framer-motion/client';

const slideVariant = (direction) => ({
  // initial: { x: direction === "left" ? -320 : 320, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: direction === 'left' ? 363 : -363, opacity: 0 },
  transition: { duration: 0.9, ease: 'easeInOut' },
});

const WhiteCard = ({ side, content, animation }) => (
  <motion.div
    className={`absolute w-[316px] h-[405px] -translate-y-5 bg-white text-black rounded-[12px] shadow-lg flex justify-center items-center top-0 z-10 ${
      side === 'left' ? 'left-0 translate-x-5' : 'right-0 -translate-x-5'
    }`}
    {...animation}
  >
    <div className='flex flex-col justify-between items-center w-[245px] h-[265px]'>
      <div className=' mb-20'>
        <h2 className='text-[46px] font-medium'>{content.title}</h2>
      </div>
      <div className='w-[273px] h-[140px] text-center font-normal text-[14px] leading-relaxed'>
        {content.desc}
      </div>
      <button className='flex justify-center items-center gap-2 w-[111px] h-[40px] px-5 py-3 rounded-full text-black text-[12px] font-medium transition bg-gradient-to-r from-[#F6A11F80] to-[#FF950080] hover:from-[#F6A11F] hover:to-[#FF9500]'>
        Try Once <MdOutlineArrowForward />
      </button>
    </div>
  </motion.div>
);

const BlackCard = ({
  side,
  subTabs,
  activeSubTab,
  setActiveSubTab,
  animation,
}) => (
  <motion.div
    className={`absolute top-0 h-full p-5 z-10 ${
      side === 'left' ? 'left-0 w-[385px]' : 'right-0 w-[435px]'
    }`}
    {...animation}
  >
    <div className='flex flex-col h-full justify-center items-center py-5 gap-10 mb-20'>
      <div className='flex justify-center flex-wrap border border-white rounded-[13px] w-[385px] h-[37px] gap-6 mb-4'>
        {subTabs.map((item) => (
          <button
            key={item}
            onClick={() => setActiveSubTab(item)}
            className={`p-4 h-[35px] w-auto rounded-[10px] text-[16px] font-medium ${
              activeSubTab === item ? 'bg-white text-black ' : 'text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className='w-[333px] h-[190px] flex flex-col justify-center gap-5'>
        {Array(4)
          .fill('LOREM IPSUM')
          .map((text, index) => (
            <div key={index} className='flex flex-col gap-3 pt-3'>
              <div className='flex justify-between items-center'>
                <span className='text-sm'>{text}</span>
                <span className='text-lg rotate-[30deg]'>
                  <MdOutlineArrowUpward size={24} />
                </span>
              </div>
              <div className='border-b-2 border-[#FFFFFF]'></div>
            </div>
          ))}
      </div>
    </div>
  </motion.div>
);

const AIHAgentTab = () => {
  const [activeTab, setActiveTab] = useState('FUNCTION');
  const [activeSubTab, setActiveSubTab] = useState('Marketing');

  const subTabs = {
    FUNCTION: ['Marketing', 'Sales', 'Customer', 'Sceaper', 'HR'],
    INDUSTRY: ['BFSI', 'Legal', 'FMCG', 'Logistics', 'Automobile'],
  };

  const infoContent = {
    FUNCTION: {
      title: 'FUNCTION',
      desc: 'Our Functional AI Agents are engineered to optimize specific business functions. Trained on domain-specific datasets, they bring depth, accuracy, and speed to critical processes.',
    },
    INDUSTRY: {
      title: 'INDUSTRY',
      desc: 'Our Industry AI Agents are tailored for the nuances and regulations of specific sectors. Powered by industry-trained LLMs and contextual data, they deliver insights and automation uniquely suited to each domain.',
    },
  };

  const isFunction = activeTab === 'FUNCTION';

  return (
    <div className='flex items-center justify-center px-4 py-10 text-white font-sans w-[765px] h-[472px] relative'>
      {/* Top Tabs */}
      <div className='absolute -top-12 left-1/2 -translate-x-1/2 w-[530px] h-[38px] flex border-2 border-white rounded-xl overflow-hidden z-20'>
        {['FUNCTION', 'INDUSTRY'].map((tab) => (
          <button
            key={tab}
            className={`w-1/2 px-8 py-2 text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? 'bg-gradient-to-r from-[#F6A11F] to-[#17BCBC] text-black'
                : 'text-white'
            }`}
            onClick={() => {
              setActiveTab(tab);
              setActiveSubTab(subTabs[tab][0]);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Wrapper */}
      <div className='relative w-[765px] h-[365px] bg-[#000000] border-[1px] border-white mt-10 rounded-[12px] flex'>
        <AnimatePresence mode='wait'>
          <WhiteCard
            key={`white-${activeTab}`}
            side={isFunction ? 'left' : 'right'}
            content={infoContent[activeTab]}
            animation={slideVariant(isFunction ? 'left' : 'right')}
          />
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <BlackCard
            key={`black-${activeTab}`}
            side={isFunction ? 'right' : 'left'}
            subTabs={subTabs[activeTab]}
            activeSubTab={activeSubTab}
            setActiveSubTab={setActiveSubTab}
            animation={slideVariant(isFunction ? 'right' : 'left')}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIHAgentTab;
