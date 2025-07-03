import React, {useState} from 'react';
import TunnelSvg from '../../../assets/Tunnel.svg';

const HomePage = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [email, setEmail] = useState('');

    const handleButtonClick = () => {
        setIsExpanded(true);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e?.preventDefault();
        setIsExpanded(false);
        setEmail('');
    };

    return (<div className='
        min-h-screen bg-white flex items-center justify-center py-[40px] px-[20px] font-sans relative
        overflow-hidden'>

        <div className='
            absolute top-0 left-0 w-full h-full z-0 pointer-events-none
            mask-[radial-gradient(ellipse_at_center,transparent_30%,black_70%)]
            md:mask-[radial-gradient(ellipse_at_center,transparent_30%,black_70%)]
            max-md:mask-[linear-gradient(to_bottom,black_0%,black_20%,transparent_35%,transparent_65%,black_80%,black_100%)]'>

            <img alt='Tunnel background' src={TunnelSvg} className='
                w-full h-full object-cover opacity-40 filter blur-[0.5px]'/>
        </div>

        <div className="text-center max-w-[1400px] w-full relative z-[1] transform translate-y-4 md:-translate-y-10">

            <h1 className='
                !font-normal !text-[#1a1a1a] !leading-[1.2] !mt-[75px] !mb-[1.5rem] text-[2.8rem] md:text-[3.5rem]'>

                Revolutionizing the {''}

                <span className='
                    inline-block font-semibold leading-[1.1] tracking-[-0.03em] bg-gradient-to-r
                    from-[#F6A11F] to-[#17BCBC] bg-no-repeat bg-left bg-[length:100%_100%] bg-clip-text
                    text-transparent text-[3.2rem] md:text-[4rem]'>

                    GenAI
                </span>


                {''} development journey
            </h1>

            <p className='
                text-[1.25rem] text-[#4a4a4a] !leading-[1.6] !mx-auto !mt-0 !mb-[4rem] !font-normal !max-w-[675px]'>

                <span className='text-[#15bcbd] text-[1.1em] tracking-[1px] font-normal'>
                    ai-
                </span>

                <span className='text-[#F6a120] text-[1.1em] tracking-[1px] font-normal'>
                    horizon
                </span>

                <span className='text-[#15bcbd] text-[1.1em] tracking-[1px] font-normal'>
                    .io{' '}
                </span>

                builds secure, scalable, and customized agentic AI solutions that empower enterprises to launch and accelerate their AI journey
            </p>

            <div className='flex justify-center'>
                <div className='relative'>
                    {/* Single container that morphs */}
                    <div className='
                        !relative !overflow-hidden !cursor-pointer !transition-all !duration-[595ms]
                        !ease-in-out !rounded-[50px] !shadow-[0_4px_15px_rgba(45,55,72,0.2)]'
                         style={{
                              width: isExpanded ?
                                  (window.innerWidth <= 768 ? '350px' : '450px') : '160px',
                              height: '60px',
                              backgroundColor: isExpanded ? '#E4FFFF' : '#F6A11F',
                         }}

                        onClick={!isExpanded ? handleButtonClick : undefined}>

                        {/* White border effect - only visible when not expanded */}
                        <div className='
                            !absolute !top-[-10px] !left-[-10px] !right-[-10px] !bottom-[-10px]
                            !bg-white !rounded-[60px] !-z-10 !transition-opacity !duration-[255ms] !ease-in-out'
                            style={{
                                opacity: isExpanded ? 0 : 1,
                                transitionDelay: isExpanded ? '0s' : '0.3s',
                                boxShadow: 'inset 0 4px 4px 0 rgba(0,0,0,0.20), inset 5px -8px 4px 0 rgba(0,0,0,0.05)',
                            }}/>

                        {/* Button text - fades out when expanding */}
                        <div className='
                            !absolute !inset-0 !flex !items-center !justify-center !text-white !text-[1.1rem]
                            !font-medium !transition-opacity !duration-[255ms] !ease-in-out'
                            style={{
                                opacity: isExpanded ? 0 : 1, pointerEvents: isExpanded ? 'none' : 'auto',}}>

                            Book a Demo
                        </div>

                        {/* Form - fades in when expanded */}
                        <div className='
                            !absolute !inset-0 !flex !items-center !py-[10px] !px-[20px]
                            !transition-opacity !duration-[255ms] !ease-in-out'
                            style={{
                                opacity: isExpanded ? 1 : 0,
                                transitionDelay: isExpanded ? '425ms' : '0s',
                                pointerEvents: isExpanded ? 'auto' : 'none',
                            }}>

                            <input
                                type='email'
                                value={email}
                                onChange={handleEmailChange}
                                placeholder='Enter your Email ID'
                                required
                                className='
                                    !bg-transparent !border-none !outline-none !text-[#555555] !text-[15px]
                                    !flex-1 !p-0 !h-full !mr-2 placeholder:!text-[#555555]'
                                onClick={(e) => e.stopPropagation()}/>

                            <button
                                type='button'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSubmit(e);
                                }}
                                className='
                                    !bg-black !text-white !border-none !rounded-[999px] !py-[7px] !px-[14px]
                                    !cursor-pointer !text-[15px] !whitespace-nowrap hover:!bg-gray-800
                                    !transition-colors !duration-200'>

                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default HomePage;
