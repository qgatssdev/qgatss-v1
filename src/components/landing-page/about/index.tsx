import './styles.scss';

const About = () => {
  return (
    <div className='about_container'>
      <h1>
        ABOUT
        <img
          src={require('../../../assets/Ellipse 6.svg').default}
          alt='eclipse'
          className='eclipse_one'
        />
      </h1>

      <img
        src={require('../../../assets/iconfilled.svg').default}
        alt='green icon'
        className='about_icon_filled'
      />
      <img
        src={require('../../../assets/icon-outlined.svg').default}
        alt='green icon'
        className='about_icon_outlined'
      />
      <div className='about_text_container'>
        <p>
          Hey! 👋 I'm [Your Name], a passionate front-end developer with [X]
          years of experience. I thrive on bringing designs to life through
          clean and efficient code,using my expertise in HTML, CSS, JavaScript,
          and responsive design. Collaborating closely with clients and
          designers, I aim to create intuitive and user-friendly interfaces that
          leave a lasting impact. Let's embark on an exciting journey together
          and build captivating websites that elevate your digital presence!
        </p>
        <p>
          When it comes to web development, continuous learning is my mantra. I
          stay at the forefront of the industry by embracing emerging trends and
          best practices, always seeking ways to optimize website performance
          and deliver cutting-edge solutions. Beyond coding, I have a love for
          nature and photography, often exploring new hiking trails and
          capturing beautiful moments through my lens. I'm passionate about
          combining creativity with technology to create exceptional digital
          experiences. Reach out, and let's turn your ideas into remarkable
          realities!
        </p>
      </div>
    </div>
  );
};

export default About;
