import Marquee from 'react-fast-marquee';
import { currentSkills } from './current-skills';
import './styles.scss';

const Skills = () => {
  return (
    <div className='skills_container'>
      <h1>Skills
      <img
          src={require('../../../assets/Ellipse 6.svg').default}
          alt='eclipse'
          className='skills_eclipse'
        />
      </h1>
      <div className='skills_marquee_container'>
        <Marquee pauseOnHover>
          <div className='skills_marquee'>
            {currentSkills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </Marquee>
        <Marquee pauseOnHover direction='right'>
          <div className='skills_marquee'>
            {currentSkills.reverse().map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
