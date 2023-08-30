import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import './styles.scss';
import { onGreen, onTransparent } from 'animations/general';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      function softwareText() {
        const tl = gsap.timeline({ delay: 1 });

        tl.fromTo(
          '.text',
          {
            x: '-130%',
          },
          {
            x: 0,
            duration: 1,
            ease: 'circ',
          }
        );

        tl.fromTo(
          '.engineer',
          {
            x: '100%',
          },
          {
            x: 0,
            duration: 1,
            ease: 'circ',
          }
        );

        return tl;
      }

      function introText() {
        const tl = gsap.timeline();
        gsap.set('.intro', {
          opacity: 0,
          yPercent: 100,
          transformStyle: 'preserve-3d',
        });

        tl.to('.intro', {
          opacity: 1,
          yPercent: 0,
          stagger: 0.02,
          duration: 0.6,
          ease: 'easeOut',
        });

        return tl;
      }
      const master = gsap.timeline();
      master.add(softwareText()).add(introText());
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      tl.fromTo(
        '.icon_filled',
        {
          scale: 0.4,
        },
        {
          scale: 1,
          duration: 2,
        }
      );

      tl.to(
        '.icon_filled',
        {
          scale: 0.4,
          duration: 2,
        },
        '-=0.5'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='hero_container' ref={containerRef}>
      <div className='hero_container_one'>
        <p className='text'>
          <span onMouseEnter={onTransparent} onMouseLeave={onGreen}>
            S
          </span>
          <span onMouseEnter={onTransparent} onMouseLeave={onGreen}>
            O
          </span>
          <span onMouseEnter={onTransparent} onMouseLeave={onGreen}>
            F
          </span>
          <span onMouseEnter={onTransparent} onMouseLeave={onGreen}>
            T
          </span>
          <span onMouseEnter={onTransparent} onMouseLeave={onGreen}>
            W
          </span>
          <span onMouseEnter={onTransparent} onMouseLeave={onGreen}>
            A
          </span>
          <span onMouseEnter={onTransparent} onMouseLeave={onGreen}>
            R
          </span>
          <span onMouseEnter={onTransparent} onMouseLeave={onGreen}>
            E
          </span>
        </p>
        <p className='intro'>Hi, I'm Uche Omodu</p>
        <img
          src={require('../../../assets/iconfilled.svg').default}
          alt='green icon'
          className='icon_filled'
        />
      </div>
      <div className='hero_container_two'>
        <p className='engineer'>
          <span onMouseEnter={onGreen} onMouseLeave={onTransparent}>
            E
          </span>
          <span onMouseEnter={onGreen} onMouseLeave={onTransparent}>
            N
          </span>
          <span onMouseEnter={onGreen} onMouseLeave={onTransparent}>
            G
          </span>
          <span onMouseEnter={onGreen} onMouseLeave={onTransparent}>
            I
          </span>
          <span onMouseEnter={onGreen} onMouseLeave={onTransparent}>
            N
          </span>
          <span onMouseEnter={onGreen} onMouseLeave={onTransparent}>
            E
          </span>
          <span onMouseEnter={onGreen} onMouseLeave={onTransparent}>
            E
          </span>
          <span onMouseEnter={onGreen} onMouseLeave={onTransparent}>
            R
          </span>
        </p>
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
