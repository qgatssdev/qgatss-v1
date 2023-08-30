import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { onGreen, onTransparent } from 'animations/general';
import './styles.scss';

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const lines = [];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      tl.to('.about_icon_filled', {
        rotation: '+=360',
        repeat: -1,
        duration: 4,
        ease: 'none',
        transformOrigin: '50% 50%',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const textElement = textRef.current;

      if (!textElement) return;
      const paragraphs = textElement.querySelectorAll('p');

      // paragraphs.forEach((paragraph) => {
      //   const words = paragraph.textContent.split(' ');
      //   words.forEach((word, index) => {
      //     lines.push(`<span class="word">${word}</span>`);
      //     if (index !== words.length - 1) {
      //       lines.push('<span class="word">&nbsp;</span>');
      //     }
      //   });
      //   lines.push('<br />');
      // });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='about_container' ref={containerRef}>
      <h1>
        <span onMouseEnter={onTransparent} onMouseLeave={onGreen}>
          ABOUT
        </span>
        {/* <img
          src={require('../../../assets/Ellipse 6.svg').default}
          alt='eclipse'
          className='eclipse_one'
        /> */}
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
        <p ref={textRef}>
          Hey!👋 I'm Uche, and I'm on a mission to craft exceptional digital
          experiences as a passionate software engineer with a over 2 years of
          experience. My expertise revolves around taking design concepts and
          turning them into functional, user-friendly realities. Collaboration
          is at the heart of my process. I work closely with clients and
          designers to ensure that every pixel aligns perfectly with the vision.
          It's not just about code, it's about creating a lasting impact through
          intuitive interfaces that users love. <br /> <br />
          When I step away from the screen, you'll often find me immersed in
          music or hitting the gym. The rhythm of coding matches the rhythm of
          my favorite tunes, and just as I sculpt code, I also sculpt myself
          through dedicated workouts. I'm a firm believer that creativity and
          technology are an unbeatable combination. Through thoughtful coding
          and innovative design, I'm on a journey to create seamless digital
          experiences that resonate. So, if you're ready to transform your ideas
          into remarkable realities, let's connect and make it happen.
        </p>
      </div>
    </div>
  );
};

export default About;
