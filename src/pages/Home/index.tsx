import Header from 'components/landing-page/header';
import Hero from 'components/landing-page/hero';
import './styles.scss';

const Home = () => {
  return (
    <div className='home_container'>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
