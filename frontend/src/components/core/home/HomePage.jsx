import '../../../css/HomePage.css';
import TunnelSvg from '../../../assets/Tunnel.svg';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='background-svg'>
        <img src={TunnelSvg} alt='' className='tunnel-background' />
      </div>

      <div className='content-container'>
        <h1 className='main-heading'>
          Revolutionizing the <span className='genai-text'>GenAI</span>{' '}
          development journey
        </h1>

        <p className='description'>
          <span className='ai-text'>ai-</span>
          <span className='horizon-text'>horizon</span>
          <span className='io-text'>.io</span> builds secure, scalable, and
          customized agentic AI solutions that helps enterprises start their AI
          journey
        </p>

        <button className='cta-button'>Book a Demo</button>
      </div>
    </div>
  );
};

export default HomePage;
