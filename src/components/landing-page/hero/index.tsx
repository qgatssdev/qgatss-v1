import './styles.scss';

const Hero = () => {
  return (
    <div className='hero_container'>
      <div className='hero_container_one'>
        <p className='text'>SOFTWARE</p>
        <p className='intro'>Hi, I'm Uche Omodu</p>
        <img
          src={require('../../../assets/iconfilled.svg').default}
          alt='green icon'
          className='icon_filled'
        />
      </div>
      <div className='hero_container_two'>
        <p>ENGINEER</p>
        <img
          src={require('../../../assets/icon-outlined.svg').default}
          alt='green icon'
          className='icon_outlined'
        />
      </div>
      <p className='hero_scrolldown'>Scroll down</p>
    </div>
  );
};

export default Hero;
