import { BiBell, BiPulse, BiSearch } from 'react-icons/bi';
import { RiApps2Line } from 'react-icons/ri';
import { GrFormClose } from 'react-icons/gr';
import { BiArrowToLeft } from 'react-icons/bi';

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <header className='header'>
      <div className='header__searchContent'>
        <BiArrowToLeft onClick={() => setOpenMenu(!openMenu)} />
        <div className='header__search'>
        <div className='header__searchbox'>
          <BiSearch />
          <input
            type='text'
            className='header--input'
            placeholder='Search in front'
          />
        </div>
          <GrFormClose />
        </div>
      </div>
      <div className='header__icons'>
        <div className='header--icon'>
          <BiBell />
        </div>
        <div className='header--icon'>
          <RiApps2Line />
        </div>
        <div className='header--icon'>
          <BiPulse />
        </div>
        <div className='header__profile'>
          <img src='/images/img6.jpg' alt='' />
        </div>
      </div>
    </header>
  );
};

export default Header;
