import About from 'components/landing-page/about';
import Header from 'components/landing-page/header';
import Hero from 'components/landing-page/hero';
import Quote from 'components/landing-page/quote';
import Skills from 'components/landing-page/skills';
import './styles.scss';

const Home = () => {
  return (
    <div className='home_container'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Quote />
    </div>
  );
};

export default Home;
