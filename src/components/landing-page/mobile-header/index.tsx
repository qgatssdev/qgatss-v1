import { Twirl as Hamburger } from 'hamburger-react';
import './styles.scss'

const MobileHeader = () => {
  return (
    <div className='mobile_header_container'>
      <p>Uche Omodu</p>
      <Hamburger color='#CCF381' duration={0.8} />
    </div>
  );
};

export default MobileHeader;
