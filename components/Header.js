import { BiBell, BiPulse, BiSearch, BiChat } from 'react-icons/bi';
import { RiApps2Line } from 'react-icons/ri';
import { GrFormClose } from 'react-icons/gr';
import { BiArrowToLeft } from 'react-icons/bi';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { CgShare } from 'react-icons/cg';
import { IoMdDownload } from 'react-icons/io';
import {} from 'react-icons/bi';
import { BsAlt } from 'react-icons/bs';
import useDropdown from '../hooks/useDropdown';

const Header = ({ openMenu, setOpenMenu }) => {
  const [dropdownOpen, toggleDropdown] = useDropdown();
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
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
              <img src='/images/img6.jpg' alt='' onClick={toggleDropdown} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>
                <div>
                  <img src='/images/img6.jpg' alt='' />
                  <p></p>
                  <p></p>
                </div>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <span>Set status</span>
              </DropdownItem>
              <DropdownItem>
                <span>Profile and account</span>
              </DropdownItem>
              <DropdownItem>
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <div>
                  <div></div>
                  <p></p>
                  <p></p>
                </div>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <span>Customization</span>
              </DropdownItem>
              <DropdownItem>
                <span>Manage team</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <span>Sign out</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
