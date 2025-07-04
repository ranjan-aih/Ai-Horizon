import AIHAgentTab from './cards/AIHAgentTab';

const AIHAgents = () => {
  return (
    <div
      className='w-full h-[832px] flex justify-center items-center'
      style={{
        backgroundImage: 'url("/AIH-AgentsBg.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex justify-between items-center w-[1280px] h-[832px] space-x-10'>
        {/* Left content */}
        <div className='flex flex-col justify-center items-center w-[345px] h-[552px] gap-5'>
          <div className='w-full h-[180px] text-[51px] flex flex-col justify-center font-roboto gap-0 leading-13'>
            <h2 className='font-bold text-[#17BCBC] text-center leading-13'>
              AI<span className='text-orange-400'>H</span> Agents
            </h2>
            <h2 className='font-normal text-[#FFFFFF] text-center mt-[4px] leading-13'>
              Tailored AI for Every Business
            </h2>
          </div>

          <div className='w-[295px] text-[19px] text-[#FFFFFF] font-normal flex flex-col gap-2'>
            <div>
              <p className='text-start tracking-normal leading-normal '>
                AIH Agents are powerful, customizable AI solutions built on our
                proprietary AIH Studio platform. Designed to address the unique
                needs of each enterprise, these agents are secure, scalable, and
                seamlessly integrate with existing enterprise systems and
                workflows.
              </p>
            </div>
            <div>
              <p className='text-start tracking-normal leading-normal'>
                Built with modular architecture and domain intelligence, AIH
                Agents are categorized to deliver maximum impact—by Function and
                by Industry.
              </p>
            </div>
          </div>
        </div>

        {/* Right Component */}
        <div className='mt-15'>
          <AIHAgentTab />
        </div>
      </div>
    </div>
  );
};

export default AIHAgents;
