import { BsDot } from 'react-icons/bs';
import { RiCommandLine } from 'react-icons/ri';

const Footer = () => {
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
        <div className='footer--command'>
          <RiCommandLine />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
