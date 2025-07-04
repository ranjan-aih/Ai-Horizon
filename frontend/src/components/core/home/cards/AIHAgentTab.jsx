import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineArrowForward, MdOutlineArrowUpward } from 'react-icons/md';

const slideVariant = (direction) => ({
  animate: { x: 0, opacity: 1 },
  exit: { x: direction === 'left' ? 350 : -350 },
  transition: { duration: 0.8, ease: 'easeInOut' },
});

const WhiteCard = ({ side, content, animation }) => (
  <motion.div
    className={`absolute w-[330px] h-[405px]  -translate-y-5 bg-[#FFFFFF] text-[#000000] rounded-[12px] shadow-lg flex justify-center items-center top-0 z-10 ${
      side === 'left' ? 'left-0 translate-x-5' : 'right-0 -translate-x-5'
    }`}
    {...animation}
  >
    <div className='flex flex-col justify-between items-center w-[245px] h-[265px]'>
      <div className=''>
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
    className={`absolute top-0 w-[330px] flex justify-center overflow-hidden h-[365px] z-10 ${
      side === 'left' ? 'left-0 translate-x-5' : 'right-0 -translate-x-5'
    }`}
    {...animation}
  >
    <div className='flex flex-col w-full h-full justify-center items-center py-5 gap-10 mb-20'>
      {/* <div> */}
      <div className='flex justify-evenly items-center border border-[#FFFFFF] rounded-[13px] w-full h-[37px]'>
        {subTabs.map((item) => (
          <button
            key={item}
            onClick={() => setActiveSubTab(item)}
            className={`text-[16px] rounded-[12px] font-normal h-[34px] max-w-[100px]  transition-all duration-200 ${
              activeSubTab === item
                ? 'bg-[#FFFFFF] text-[#000000] rounded-[10px] font-bold'
                : 'text-[#FFFFFF]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      {/* </div> */}
      <div className='w-[300px] h-[190px] flex flex-col justify-center'>
        {Array(4)
          .fill('LOREM IPSUM')
          .map((text, index) => (
            <div key={index} className='flex flex-col gap-3 pt-3'>
              <div className='flex justify-between items-center'>
                <span className='text-sm'>{text}</span>
                <span className='text-lg rotate-[45deg]'>
                  <MdOutlineArrowUpward size={24} />
                </span>
              </div>
              <div className='border-b-[1px] border-[#FFFFFF]'></div>
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
    <div className='flex items-center justify-center px-4 py-10 text-[#FFFFFF] font-sans w-[765px] h-[472px] relative'>
      {/* Top Tabs */}
      <div className='absolute -top-12 left-1/2 -translate-x-1/2 w-[530px] h-[38px] flex border-2 border-[#FFFFFF] rounded-xl overflow-hidden z-20'>
        {['FUNCTION', 'INDUSTRY'].map((tab) => (
          <button
            key={tab}
            className={`w-1/2 px-8 py-2 text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? 'bg-gradient-to-r from-[#F6A11F] to-[#17BCBC] text-[#000000]'
                : 'text-[#FFFFFF]'
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

      <div className='relative w-[765px] h-[365px] bg-[#000000] border-[1px] border-[#FFFFFF] rounded-[12px] flex justify-center '>
        <div className='w-[700px] h-[365px] flex justify-between items-center'>
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
    </div>
  );
};

export default AIHAgentTab;
