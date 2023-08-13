import './styles.scss';

const DesktopHeader = () => {
  return (
    <div className='desktop_header_container'>
      <p>Uche Omodu</p>
      <div className='desktop_header_links'>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
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
