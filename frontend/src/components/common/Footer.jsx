import { useState } from 'react';
import { GiSpinningTop } from 'react-icons/gi';
import aih_logo from '../../assets/aih_logo.png';
import { Map, Marker, APIProvider } from '@vis.gl/react-google-maps';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = ({ apiKey }) => {
  const center = { lat: 19.1139043, lng: 72.9181878 };
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
    <footer
      className="
                bg-[#202020] w-full min-h-screen m-0 p-0 relative overflow-x-hidden
                before:content-[''] before:absolute before:bottom-[70px] before:left-[20px] before:right-[20px]
                before:h-px before:bg-white md:before:left-[30px] md:before:right-[30px] lg:before:left-[40px]
                lg:before:right-[40px] xl:before:left-[45px] xl:before:right-[45px]"
    >
      <div
        className="flex justify-between items-center flex-wrap relative gap-[25px] py-[20px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px]
                   /* Horizontal lines */
                    after:content-[''] after:absolute after:-bottom-[10px] after:left-[20px] after:right-[20px]
                        after:h-px after:bg-white md:after:left-[40px] md:after:right-[40px] lg:after:left-[60px]
                        lg:after:right-[60px] xl:after:left-[80px] xl:after:right-[80px]"
      >
        <form
          className='
                        flex items-center bg-[beige] rounded-[999px] py-[10px] px-[20px] h-[60px] w-full max-w-[450px]'
          onSubmit={handleSubmit}
        >
          <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Enter your Email ID'
            required
            className='bg-transparent text-[#555555] text-[15px] flex-1 p-0 h-full mr-0 placeholder:text-[#555555]'
          />

          <button
            type='submit'
            className='bg-black text-white rounded-[999px] py-[7px] px-[14px] cursor-pointer text-[15px] whitespace-nowrap'
          >
            Submit
          </button>
        </form>

        <h2 className='text-white text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] m-0'>
          Build your own private GenAI Now!
        </h2>
      </div>

      {/* Breadcrumb Indicator */}
      {/* TODO: UPDATE WITH LOGO*/}
      <div className='absolute top-[140px] left-[clamp(20px,6vw,70px)] flex items-center text-white'>
        <GiSpinningTop className='text-[18px] !mr-[15px] -rotate-45' />
        <span className='text-[17px]'>
          AI Horizons {'>'} {currentPage}
        </span>
      </div>

      {/* Quick Links Section */}
      <div className='absolute top-[25vh] left-12 text-[#f6a11f] text-[20px] font-bold xl:left-30'>
        Quick Links
      </div>

      <div
        className="
                absolute top-[32vh] left-12 grid grid-cols-[repeat(3,max-content)] gap-[75px] text-white w-max xl:left-30

                /* vertical line */
                after:content-[''] after:absolute after:top-[-70px] after:right-[-85px]
                after:w-px after:h-[475px] after:bg-white xl:after:right-[-95px] 2xl:after:right-[-105px]"
      >
        {/* Company */}
        <div className='flex flex-col w-max !mr-[50px] last:mr-0'>
          <h3 className='text-[17px] font-bold !mb-[15px] text-white'>
            Company
          </h3>

          <ul className='list-none m-0 p-0'>
            {['About us', 'Partner', 'Strategic Investor', 'Leadership'].map(
              (item) => (
                <li
                  key={item}
                  className='!mb-3 text-[17px] text-[#ccc] cursor-pointer hover:text-white'
                >
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item);
                    }}
                    className='no-underline hover:text-white'
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Resources */}
        <div className='ft-links-column !mr-[50px]'>
          <h3 className='text-[17px] font-bold !mb-[15px] text-white'>
            Resources
          </h3>

          <ul className='list-none m-0 !p-0'>
            {[
              'Blogs',
              'Case Studies',
              'Comparisons',
              'Industries',
              'User Cases',
              'Newsrooms',
            ].map((item) => (
              <li
                key={item}
                className='!mb-3 text-[17px] text-[#ccc] cursor-pointer hover:text-white'
              >
                <a
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item);
                  }}
                  className='no-underline hover:text-white'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform */}
        <div className='ft-links-column'>
          <h3 className='text-[17px] font-bold !mb-[15px] text-white'>
            Platform
          </h3>

          <ul className='list-none m-0 p-0'>
            {['Career', 'Solutions', 'Enterprises'].map((item) => (
              <li
                key={item}
                className='!mb-3 text-[17px] text-[#ccc] cursor-pointer hover:text-white'
              >
                <a
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item);
                  }}
                  className='no-underline hover:text-white'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className='absolute top-[68vh] left-20 mt-[30px] xl:left-72'>
        <img src={aih_logo} alt='AIH Logo' className='w-[180px] h-auto' />
      </div>

      {/* Map Section */}
      <div
        className='
                absolute top-[23vh] right-28 w-[400px] h-[300px] bg-[#1a1a1a]
                cursor-pointer transition-all duration-300 ease-in-out border border-[#333] rounded-[15px]
                overflow-hidden xl:right-30'
        onClick={() =>
          window.open(
            'https://www.google.com/maps/place/KAILASH+BUSINESS+PARK,+Park+Site+Rd,+HMPL+Surya+Nagar,+Vikhroli+West,+Mumbai,+Maharashtra+400076/@19.1139446,72.9154082,17z',
            '_blank',
            'noopener,noreferrer'
          )
        }
      >
        <APIProvider apiKey={apiKey}>
          <Map
            defaultZoom={13}
            defaultCenter={center}
            gestureHandling='greedy'
            disableDefaultUI
            style={{ width: '100%', height: '300px' }}
          >
            <Marker position={center} />
          </Map>
        </APIProvider>
      </div>

      <div className='absolute top-[65vh] right-28 text-center text-white max-w-[300px] xl:right-42'>
        <h3 className='text-[20px] font-bold text-[#f6a11F] !mb-[15px]'>
          Contact
        </h3>

        <p className='text-[17px] leading-[1.4] !mb-[15px] text-[#ccc]'>
          1306-07, C wing, Kailas Business Park, Surya Nagar, Vikhroli West,
          Mumbai, Maharashtra 400079
        </p>

        <a
          href='https://www.linkedin.com/company/ai-horizon-io/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin
            className='
                    [font-size:28px!important] [color:#0077b5!important] [cursor:pointer!important]
                    [transition:transform_0.2s_ease!important] [display:block!important]
                    [margin:0_auto!important] hover:[transform:scale(1.1)!important]'
          />
        </a>
      </div>

      {/* Bottom Links */}
      <div className='absolute bottom-8 right-8 text-white text-[15px] opacity-80 xl:right-12 2xl:right-16'>
        <a href='/privacy' className='ft-footer-link'>
          Privacy Policy
        </a>{' '}
        |{' '}
        <a href='/terms' className='ft-footer-link'>
          Terms and Conditions
        </a>{' '}
        | India
      </div>
    </footer>
  );
};

export default Footer;
