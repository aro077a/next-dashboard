import { BsDot } from 'react-icons/bs';
import { RiCommandLine } from 'react-icons/ri';
import useLeftBar from '../hooks/useLeftBar';
import KeyboardShortcuts from './leftbar/KeyboardShortcuts';
import LeftBar from './leftbar/LeftBar';

const Footer = () => {
  const [visible, openLeftBar] = useLeftBar();
  return (
    <footer className='footer'>
      <div className='footer--info'>
        <p>© Front. 2020 Htmlstream.</p>
      </div>
      <div className='footer__options'>
        <div className='footer__faq'>
          <p>FAQ</p>
          <BsDot />
        </div>
        <div className='footer--license'>
          <p>License</p>
          <BsDot />
        </div>
        <div className='footer--command' onClick={openLeftBar}>
          <RiCommandLine />
          <LeftBar
            visible={visible}
            openLeftBar={openLeftBar}
            className='shortcut__leftBar'
            title='Keyboard shortcuts'
          >
            <KeyboardShortcuts />
          </LeftBar>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
