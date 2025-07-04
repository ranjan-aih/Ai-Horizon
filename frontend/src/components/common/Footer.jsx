import {useState} from 'react';
import aih_logo from '../../assets/aih_logo.png';
import {Map, Marker, APIProvider} from '@vis.gl/react-google-maps';
import {FaLinkedin} from 'react-icons/fa6';
import aihNavLogo from "../../assets/aih-nav-logo.svg";

const Footer = ({apiKey}) => {
    const center = {lat: 19.1139043, lng: 72.9181878};
    const [currentPage, setCurrentPage] = useState('Home');
    const [email, setEmail] = useState('');

    const handleLinkClick = (linkName) => {
        setCurrentPage(linkName);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            console.log('Email submitted:', email);
            // Add your email submission logic here
            alert(`Email submitted: ${email}`);
            setEmail(''); // Clear the input after submission
        } else {
            alert('Please enter a valid email address');
        }
    };

    return (
        <footer className="
            bg-[#202020] w-full min-h-screen m-0 p-0 relative overflow-x-hidden

            {/*Horizontal line*/}
            before:content-[''] before:absolute before:bottom-[250px] md:before:bottom-[70px] before:left-[20px]
            before:right-[20px] before:h-px before:bg-white md:before:left-[30px] md:before:right-[30px]
            lg:before:left-[40px] lg:before:right-[40px] xl:before:left-[45px] xl:before:right-[45px]">

            <div className="
                flex justify-between items-center flex-wrap relative gap-[25px] py-[20px] px-[20px] md:px-[40px]
                lg:px-[60px] xl:px-[80px]

                /* Horizontal line */
                after:content-[''] after:absolute after:-bottom-[10px] after:left-[20px] after:right-[20px] after:h-px
                after:bg-white md:after:left-[40px] md:after:right-[40px] lg:after:left-[60px] lg:after:right-[60px]
                xl:after:left-[80px] xl:after:right-[80px] hidden md:flex">

                <form className='
                    flex items-center bg-[beige] rounded-[999px] py-[10px] px-[20px] h-[60px] w-full max-w-[450px]'
                    onSubmit={handleSubmit}>

                    <input
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Enter your Email ID'
                        required
                        className='bg-transparent text-[#555555] text-[15px] flex-1 p-0 h-full mr-0
                        placeholder:text-[#555555]'/>

                    <button
                        type='submit'
                        className='bg-black text-white rounded-[999px] py-[7px] px-[14px] cursor-pointer text-[15px]
                        whitespace-nowrap'>
                        Submit
                    </button>
                </form>

                <h2 className='text-white text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] m-0'>
                    Build your own private GenAI Now!
                </h2>
            </div>

            {/* Breadcrumb Indicator - Hidden on mobile */}
            <div className='mt-8 mb-6 px-4 md:px-8 lg:px-12 xl:px-16 flex items-center text-white hidden md:flex'>
                <img src={aihNavLogo} alt="AIH nav Logo" className="h-7 w-7 mr-4"/>
                <span className='text-base md:text-lg'> AI Horizons {'>'} {currentPage} </span>
            </div>

            {/* Quick Links Section */}
            <div className='absolute top-[2vh] md:top-[25vh] left-7 text-[16px] md:text-[20px] font-bold xl:left-30 text-[#f6a11f]'>
                Quick Links
            </div>

            <div
                className="
                absolute top-[6vh] md:top-[32vh] left-7 grid grid-cols-2 md:grid-cols-[repeat(3,max-content)] gap-[3.6px] md:gap-[75px] text-white w-max xl:left-30

                /* vertical line - only on desktop */
                md:after:content-[''] md:after:absolute md:after:top-[-70px] md:after:right-[-85px]
                md:after:w-px md:after:h-[475px] md:after:bg-white xl:after:right-[-95px] 2xl:after:right-[-105px]"
            >
                {/* Company */}
                <div className='flex flex-col w-max !mr-[45px] md:!mr-[50px] last:mr-0'>
                    <h3 className='text-[13.5px] md:text-[17px] font-bold !mb-[13.5px] md:!mb-[15px] text-white'>
                        Company
                    </h3>

                    <ul className='list-none m-0 p-0'>
                        {['About us', 'Partner', 'Strategic Investor', 'Leadership'].map(
                            (item) => (
                                <li
                                    key={item}
                                    className='
                                    !mb-[2.7px] md:!mb-3 text-[13.5px] md:text-[17px] text-[#ccc] cursor-pointer
                                    hover:text-white'>

                                    <a
                                        href='#'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(item);
                                        }}
                                        className='no-underline hover:text-white'>

                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Resources */}
                <div className='ft-links-column !mr-[45px] md:!mr-[50px]'>
                    <h3 className='text-[13.5px] md:text-[17px] font-bold !mb-[13.5px] md:!mb-[15px] text-white'>
                        Resources
                    </h3>

                    <ul className='list-none m-0 !p-0'>
                        {['Blogs', 'Case Studies', 'Comparisons', 'Industries', 'User Cases', 'Newsrooms']
                        .map((item) => (
                            <li
                                key={item}
                                className='
                                    !mb-[2.7px] md:!mb-3 text-[13.5px] md:text-[17px] text-[#ccc] cursor-pointer
                                    hover:text-white'>

                                <a
                                    href='#'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(item);
                                    }}
                                    className='no-underline hover:text-white'>

                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Platform - Now visible on mobile, positioned below Company */}
                <div className='ft-links-column md:block'>
                    <h3 className='text-[13.5px] md:text-[17px] font-bold !mb-[13.5px] md:!mb-[15px] text-white'>
                        Platform
                    </h3>

                    <ul className='list-none m-0 p-0'>
                        {['Career', 'Solutions', 'Enterprises'].map((item) => (
                            <li
                                key={item}
                                className='
                                    !mb-[2.7px] md:!mb-3 text-[13.5px] md:text-[17px] text-[#ccc] cursor-pointer
                                    hover:text-white'>

                                <a
                                    href='#'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(item);
                                    }}
                                    className='no-underline hover:text-white'>

                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Logo */}
            <div className='
                absolute top-[60vh] md:top-[68vh] mt-[8px] md:mt-[30px] left-1/2 transform -translate-x-1/2 md:left-20
                md:transform-none xl:left-72'>

                <img src={aih_logo} alt='AIH Logo' className='w-[180px] h-auto'/>
            </div>

            {/* Map Section - Hidden on mobile */}
            <div
                className='
                    absolute top-[23vh] right-28 w-[400px] h-[300px] bg-[#1a1a1a] cursor-pointer transition-all
                    duration-300 ease-in-out border border-[#333] rounded-[15px] overflow-hidden xl:right-30
                    hidden md:block'

                onClick={() =>
                    window.open(
                        'https://www.google.com/maps/place/KAILASH+BUSINESS+PARK,+Park+Site+Rd,+HMPL+Surya+Nagar,+Vikhroli+West,+Mumbai,+Maharashtra+400076/@19.1139446,72.9154082,17z',
                        '_blank',
                        'noopener,noreferrer'
                    )
                }>

                <APIProvider apiKey={apiKey}>
                    <Map
                        defaultZoom={13}
                        defaultCenter={center}
                        gestureHandling='greedy'
                        disableDefaultUI
                        style={{width: '100%', height: '300px'}}>

                        <Marker position={center}/>
                    </Map>
                </APIProvider>
            </div>

            <div className='
                absolute top-[38vh] md:top-[65vh] left-1/2 transform -translate-x-1/2 md:right-28 md:left-auto
                md:translate-x-0 text-center text-white max-w-[300px] xl:right-42'>

                <h3 className='text-[16px] md:text-[20px] font-bold text-[#f6a11F] !mb-[15px]'> Contact </h3>

                <p className='text-[14px] md:text-[17px] leading-[1.4] !mb-[15px] text-[#ccc]'>
                    1306-07, C wing, Kailas Business Park, Surya Nagar, Vikhroli West,
                    Mumbai, Maharashtra 400079
                </p>

                <a href='https://www.linkedin.com/company/ai-horizon-io/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className='
                        [font-size:28px!important] [color:#0077b5!important] [cursor:pointer!important]
                        [transition:transform_0.2s_ease!important] [display:block!important] [margin:0_auto!important]
                        hover:[transform:scale(1.1)!important]'
                    />
                </a>
            </div>

            {/* Bottom Links */}
            <div className="
                absolute bottom-44 md:bottom-8 w-full
                text-white text-[13px] md:text-[15px] opacity-80">

                <div className="
                    flex flex-col md:flex-row
                    justify-between items-center
                    px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px]
                    space-y-2 md:space-y-0
                    text-center md:text-right">

                    <span className="ft-footer-link">
                        © 2024 Nexasprint Technologies Pvt. Ltd. All rights reserved.
                    </span>

                    {/* Stacks below on mobile, right‑aligned on desktop */}
                    <div>
                        <a href="/privacy" className="ft-footer-link"> Privacy Policy </a>{' '} |{' '}
                        <a href="/terms" className="ft-footer-link"> Terms and Conditions </a>{' '} | India
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
