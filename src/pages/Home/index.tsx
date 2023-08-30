import { split } from 'animations/text';
import About from 'components/landing-page/about';
import Footer from 'components/landing-page/footer';
import Header from 'components/landing-page/header';
import Hero from 'components/landing-page/hero';
import Projects from 'components/landing-page/projects';
import Quote from 'components/landing-page/quote';
import Skills from 'components/landing-page/skills';
import { useEffect } from 'react';
import './styles.scss';

const Home = () => {
  useEffect(() => {
    split();
  });
  
  return (
    <>
      <div className='home_container'>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Quote />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default Home;
