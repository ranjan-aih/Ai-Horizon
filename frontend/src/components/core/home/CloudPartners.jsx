import LogoBeltLeft from './cards/LogoBeltLeft';
import LogoBeltRight from './cards/LogoBeltRight';
import { GoArrowRight } from 'react-icons/go';
import InfoCard from '../home/cards/InfoCard';
import LearnMoreButton from '../home/cards/LearnMoreButton';

function CloudPartners() {
  const logos = [
    { name: 'Google Cloud', type: 'google' },
    { name: 'Azure', type: 'azure' },
    { name: 'Google Cloud', type: 'google' },
    { name: 'Azure', type: 'azure' },
    { name: 'Google Cloud', type: 'google' },
    { name: 'Azure', type: 'azure' },
    { name: 'Google Cloud', type: 'google' },
    { name: 'Azure', type: 'azure' },
  ];

  const data = [
    {
      title: '200+ LLMs',
      content:
        'We support all major open-source and proprietary LLMs—trained to understand, interpret, and generate human-like language. Our platform gives you the flexibility to select the most effective model for your specific generative AI use case.',
    },
    {
      title: 'Vector Databases',
      content:
        'We integrate with all leading vector databases, which store data as high-dimensional vectors. This allows our AI agents to retrieve and understand contextually relevant information at speed—powering more accurate and intelligent outputs.',
    },
    {
      title: 'Major Cloud Platforms',
      content:
        'Our platform is cloud-agnostic and fully compatible with AWS, Google Cloud, Azure, and others. This ensures seamless, secure, and scalable deployment tailored to your infrastructure.',
    },
    {
      title: 'Databases',
      content:
        "We connect with all major structured and unstructured data sources. Whether it's 	SQL, NoSQL, or real-time data lakes, we ensure smooth data handling, making 	your GenAI applications robust and future-ready.",
    },
  ];

  return (
    <div className='bg-[#202020] font-albert flex justify-center items-center'>
      <div className='w-[390px] h-[1011px] sm:h-[832px] sm:w-[1280px] flex flex-col justify-center items-center gap-[17px] font-albert'>
        <div className='sm:w-[1122px] sm:h-[592px] '>
          {/* Top Logo Belt */}
          <div className='h-[64.59px] w-[324px] sm:w-[1103px] sm:h-[66px]'>
            <LogoBeltRight direction='right' logos={logos} />
          </div>

          {/* Main Cards Section */}

          <div className='my-10 w-[324px] h-[821.13px] sm:w-[1122px] sm:h-[426px] flex gap-[15px] sm:gap-[30px] justify-center flex-wrap items-center sm:flex-nowrap'>
            <InfoCard data={data} />
          </div>

          {/* Bottom Logo Belt */}
          <div className='hidden sm:block'>
            <LogoBeltLeft direction='left' logos={logos} />
          </div>
        </div>

        {/* Learn More Button */}
        <div className='hidden sm:flex justify-center pb-10 sm:w-[138px] sm:h-[44px] mt-20'>
          <LearnMoreButton
            text='Learn More'
            element={<GoArrowRight size={24} />}
          />
        </div>
      </div>
    </div>
  );
}

export default CloudPartners;
