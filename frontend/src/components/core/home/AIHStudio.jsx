import { FaRegSquare } from 'react-icons/fa6';

const cards = [
  {
    logo: <FaRegSquare className='text-white' size={24} />,
    title: 'PRIVATE',
    desc: 'Built with industry-standard encryption and compliance-ready frameworks to ensure your enterprise data remains fully protected.',
    color: 'text-[#00D458]',
  },
  {
    logo: <FaRegSquare className='text-white' size={24} />,
    title: 'ROBUST SDK',
    desc: 'Full-stack SDKs and API kits accelerate development and integration—allowing engineering teams to focus on innovation, not infrastructure.',
    color: 'text-[#0091D4] ',
  },
  {
    logo: <FaRegSquare className='text-white' size={24} />,
    title: 'LLMOPS',
    desc: 'End-to-end operational tooling for managing large language models in production, including versioning, monitoring, and performance tuning.',
    color: 'text-[#D400B8] ',
  },
  {
    logo: <FaRegSquare className='text-white' size={24} />,
    title: 'WORKFLOW INTEGRATION',
    desc: 'Easily integrates into existing enterprise ecosystems—CRMs, ERPs, cloud platforms, and more—with full customization flexibility.',
    color: 'text-[#16F3FF] ',
  },
  {
    logo: <FaRegSquare className='text-white' size={24} />,
    title: 'SECRET KEY',
    desc: 'Manage access and credentials with secure role-based secret key infrastructure.',
    color: 'text-[#FAFE00] ',
  },
  {
    logo: <FaRegSquare className='text-white' size={24} />,
    title: 'AGENT LIBRARY',
    desc: 'Accelerate time-to-value with a growing collection of preconfigured agents for common business tasks.',
    color: 'text-[#D036FF]',
  },
];

const AIHStudio = () => {
  return (
    <div className='flex justify-center items-center'>
      {/* <div className='border-4 border-black'> */}
      <div className='relative w-[1280px] h-[832px] bg-[#FFFFFF]'>
        {/* Background Vertical Lines */}
        <div className='absolute inset-0 z-0 mr-24'>
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className='border-l border-[#FFFFFF]'
              style={{
                position: 'absolute',
                top: '12px',
                height: '820px',
                width: '1px',
                backgroundColor: '#B3B3B3',
                opacity: 0.5,
                left: `${(i + 1) * (593 / 10)}px`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className='relative z-10 flex flex-col md:flex-row gap-32 w-[1280px] h-[832px] items-center justify-center  pr-50'>
          <div className='flex gap-6 w-full md:w-[600px] ml-6'>
            {[0, 1, 2].map((colIdx) => (
              <div
                key={colIdx}
                className={`flex flex-col gap-6 ${
                  colIdx === 1 ? 'mt-[100px]' : colIdx === 2 ? 'mt-[200px]' : ''
                }`}
              >
                {cards.slice(colIdx * 2, colIdx * 2 + 2).map((card, idx) => (
                  <div
                    key={idx}
                    className='border-[1px] border-[#000000] hover:border-cyan-600 w-[202px] h-[225px] p-[5px] shadow-xl flex justify-center items-center'
                  >
                    <div className='flex justify-center items-center w-[193px] h-[215px] shadow-2xl bg-[#000000]'>
                      <div className='flex flex-col justify-center items-center space-y-4 w-[143px] h-[160px]'>
                        {/* Icon */}
                        <div className='w-[24px]'>{card.logo}</div>

                        {/* Title */}
                        <div
                          className={`text-center text-[18px] font-medium uppercase ${card.color}`}
                        >
                          {card.title}
                        </div>

                        {/* Description */}
                        <div className='font-normal text-[11px] text-[#FFFFFF] text-center'>
                          {card.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Right Text Section */}
          <div className='flex flex-col justify-center items-center max-w-[365px] gap-2'>
            <p className='text-[18px] text-[#F6A11F] uppercase font-medium'>
              Develop Gen-AI application using
            </p>
            <h1 className='text-[51px] font-medium '>AIH Studio</h1>
            <div className='flex justify-center items-center flex-col max-w-[365px] text-[#000000] gap-4 '>
              <p className='font-normal text-[20px] text-center tracking-normal leading-6'>
                Your Enterprise Platform for Building Custom Generative AI
                Applications
              </p>
              <p className='font-normal text-[20px] text-center tracking-normal leading-6'>
                AIH Studio is the flagship enterprise platform from{' '}
                <span className='text-[#15bcbd] text-[1.1em] tracking-[1px] font-normal'>
                  ai-
                </span>
                <span className='text-[#F6a120] text-[1.1em] tracking-[1px] font-normal'>
                  horizon
                </span>
                <span className='text-[#15bcbd] text-[1.1em] tracking-[1px] font-normal'>
                  .io{' '}
                </span>
                , purpose-built to empower businesses in developing secure,
                scalable, and intelligent AI agents tailored to their unique
                needs.
              </p>
              <p className='font-normal text-[20px] text-center tracking-tight leading-tight'>
                Whether you're building from scratch or extending with prebuilt
                components, AIH Studio provides everything you need—from
                powerful SDKs to enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AIHStudio;
