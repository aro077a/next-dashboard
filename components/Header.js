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
import { MdKeyboardArrowDown, MdOpenInNew } from 'react-icons/md';
import useDropdown from '../hooks/useDropdown';
import { useState } from 'react';

const Header = ({ openMenu, setOpenMenu }) => {
  const [dropdownOpen, toggleDropdown] = useDropdown();
  const [isStatusHovered, setIsStatusHovered] = useState(false);
  const [isCustHovered, setIsCustHovered] = useState(false);

  const mouseStatusEnter = () => {
    setIsStatusHovered(!isStatusHovered);
  };

  const mouseStatusLeave = () => {
    setIsStatusHovered(false);
  };
  const mouseSCustEnter = () => {
    setIsCustHovered(!isStatusHovered);
  };

  const mouseCustLeave = () => {
    setIsCustHovered(false);
  };
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
              <DropdownItem disabled className='header__user-container'>
                <div className='header__user'>
                  <div className='header__user-image'>
                    <img src='/images/img6.jpg' alt='' />
                  </div>
                  <div className='header__user-info'>
                    <p className='header--user-name'>Mark Williams</p>
                    <p className='header--user-email'>mark@example.com</p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem
                onMouseEnter={mouseStatusEnter}
                onMouseLeave={mouseStatusLeave}
              >
                <div className='arrow'>
                  <span>Set status</span>
                  <MdKeyboardArrowDown className='is-open' />
                </div>
              </DropdownItem>
              <div className={isStatusHovered ? 'open' : 'close'}>
                <ul className='open__status'>
                  <li>Available</li>
                  <li>Busy</li>
                  <li>Away</li>
                </ul>
                <p className='open--reset'>Reset status</p>
              </div>
              <DropdownItem>
                <span>Profile and account</span>
              </DropdownItem>
              <DropdownItem>
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <div className='header__pro-user'>
                  <div className='header__pro-user-info'>HS</div>
                  <div className='header__pro-user-profile'>
                    <p className='header--pro-user-name'>
                      Htmlstream <span>PRO</span>
                    </p>
                    <p className='header--pro-user-email'>hs.example.com</p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem
                onMouseEnter={mouseSCustEnter}
                onMouseLeave={mouseCustLeave}
              >
                <div className='arrow'>
                  <span>Customization</span>
                  <MdKeyboardArrowDown className='is-open' />
                </div>
              </DropdownItem>
              <div className={isCustHovered ? 'open-cust' : 'close'}>
                <ul className='open__cust-content'>
                  <li>Invite people </li>
                  <li>
                    Analytics <MdOpenInNew />
                  </li>
                  <li>
                    Customize front <MdOpenInNew />
                  </li>
                </ul>
              </div>
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
