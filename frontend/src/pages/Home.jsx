import SuccessStory from '../components/core/home/SuccessStory';
import AIHAgents from '../components/core/home/AIHAgents';
import AIHStudio from '../components/core/home/AIHStudio';
import Blogs from '../components/core/home/Blogs';
import HomePage from '../components/core/home/HomePage';
import CloudPartners from '../components/core/home/CloudPartners';

const Home = () => {
  return (
    <>
      <HomePage />
      <SuccessStory />
      <CloudPartners />
      <AIHAgents />
      <AIHStudio />
      <Blogs />
    </>
  );
};

export default Home;
