import './styles.scss';

const Footer = () => {
  return (
    <div className='footer_container'>
      <p className='footer_question'>Want to discuss about a project?</p>
      <p className='footer_confirmation'>Let’s get to Work</p>
      <div className='footer_links_container'>
        <p className='footer_designer'>
          Designed by <span>Israel</span>
        </p>
        <p className='footer_developer'>©Uche Omodu</p>
        <div className='footer_mail'>
          <p>TW</p>
          <p>IG</p>
          <p className='mailto'>
            Contact me via mail
            <span>
                <img src={require('../../../assets/Group 23.svg').default} alt="" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
