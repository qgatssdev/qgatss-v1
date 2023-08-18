import MediaQuery from 'react-responsive';
import DesktopHeader from '../desktop-header';
import MobileHeader from '../mobile-header';
import './styles.scss';

const Header = () => {
  return (
    <>
      <MediaQuery minWidth={0} maxWidth={767}>
        <MobileHeader />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <DesktopHeader />
      </MediaQuery>
    </>
  );
};

export default Header;
