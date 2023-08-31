import { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styles.scss';

gsap.registerPlugin(ScrollTrigger);

const Quote = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    Splitting();

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          toggleActions: 'restart none none reverse',
          // once: true,
        },
      });

      tl.fromTo(
        '.quote',
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          // duration: 1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='quote_container' ref={containerRef}>
      <div className='quote_text'>
        <img
          src={require('../../../assets/apostrophe.svg').default}
          alt='eclipse'
          className='apostrophe'
        />
        <p data-splitting='lines' className='quote'>
          The best software engineering projects are not built solely on code;
          they are woven together with creativity, innovation, and a deep
          understanding of human needs
        </p>
      </div>
      <p className='quote_person'>-Grady Booch</p>
    </div>
  );
};

export default Quote;
