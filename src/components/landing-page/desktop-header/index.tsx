import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './styles.scss';
import { setHoverAnimation } from 'animations/general';

const DesktopHeader = () => {
  const containerRef = useRef(null);
  const nameRef = useRef<HTMLLIElement | null>(null);
  const aboutRef = useRef<HTMLLIElement | null>(null);
  const projectsRef = useRef<HTMLLIElement | null>(null);
  const contactRef = useRef<HTMLLIElement | null>(null);
  const resumeRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const nameCleanup = setHoverAnimation(nameRef.current);
      const aboutCleanup = setHoverAnimation(aboutRef.current);
      const projectsCleanup = setHoverAnimation(projectsRef.current);
      const contactCleanup = setHoverAnimation(contactRef.current);
      const resumeCleanup = setHoverAnimation(resumeRef.current);

      return () => {
        contactCleanup();
        resumeCleanup();
        projectsCleanup();
        aboutCleanup();
        nameCleanup();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [aboutRef, projectsRef, contactRef, resumeRef, nameRef]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.desktop_name',
        {
          y: -100,
        },
        {
          y: 0,
          duration: 0.5,
        }
      );

      gsap.fromTo(
        '.desktop_header_links',
        {
          y: -100,
        },
        {
          y: 0,
          duration: 0.5,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='desktop_header_container' ref={containerRef}>
      <li ref={nameRef} className='desktop_name'>
        Uche Omodu
      </li>
      <div className='desktop_header_links'>
        <ul>
          <li ref={aboutRef}>About</li>
          <li ref={projectsRef}>Projects</li>
          <li ref={contactRef}>Contact</li>
          <li ref={resumeRef}>Resume</li>
        </ul>
      </div>
      <img
        src={require('../../../assets/Ellipse 4.svg').default}
        alt='eclipse'
        className='desktop_eclipse'
      />
    </div>
  );
};

export default DesktopHeader;
