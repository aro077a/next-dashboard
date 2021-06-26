import { BiBell, BiPulse, BiSearch } from 'react-icons/bi';
import { RiApps2Line } from 'react-icons/ri';
import { GrFormClose } from 'react-icons/gr';
import { BiArrowToLeft, BiDotsVerticalRounded } from 'react-icons/bi';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from 'reactstrap';
import {
  MdKeyboardArrowDown,
  MdOpenInNew,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import useDropdown from '../hooks/useDropdown';
import { useState } from 'react';
import useCollapse from '../hooks/useCollapse';
import DashboardTabs from './tabs/DashboardTabs';
import { appsData } from './dashboard/dashboardInfoData';
import LeftBar from './leftbar/LeftBar';
import useLeftBar from '../hooks/useLeftBar';

const Header = ({ openMenu, setOpenMenu }) => {
  const [dropdownOpen, toggleDropdown] = useDropdown();
  const [visible, openLeftBar] = useLeftBar();
  const [notifications, setNotifications] = useState();
  const [toggleApps, setToggleApps] = useState();
  const [isOpen, toggleCollapse] = useCollapse();
  const [isStatusHovered, setIsStatusHovered] = useState(false);
  const [isCustHovered, setIsCustHovered] = useState(false);

  const toggleOpenApps = () => {
    setToggleApps(!toggleApps);
  };
  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

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
        <BiArrowToLeft
          onClick={() => setOpenMenu(!openMenu)}
          id='TooltipExample'
        />
        <Tooltip
          placement='right'
          isOpen={isOpen}
          target='TooltipExample'
          toggle={toggleCollapse}
          style={{
            background: '#132144',
            width: '8rem',
            fontSize: '1.4rem',
            marginLeft: '0.5rem',
          }}
        >
          Collapse
        </Tooltip>
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
          <Dropdown isOpen={notifications} toggle={toggleNotifications}>
            <DropdownToggle caret className='notifications'>
              <BiBell onClick={toggleNotifications} />
              <div className='header--icon-badge'></div>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>
                Notifications <BiDotsVerticalRounded />
              </DropdownItem>
              <DashboardTabs />
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className='header--iconApp'>
          <Dropdown isOpen={toggleApps} toggle={toggleOpenApps}>
            <DropdownToggle caret className='apps'>
              <RiApps2Line onClick={toggleOpenApps} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>Web apps & services</DropdownItem>
              <DropdownItem divider />
              <div className='app-wrapper'>
                {appsData.map((app) => {
                  return (
                    <DropdownItem className='app' key={app.id}>
                      <div className='app-image'>
                        <img src={app.img} alt='' />
                      </div>
                      <div className='app-info'>
                        <p className='app-name'>{app.title}</p>
                        <p className='app-text'>{app.info}</p>
                      </div>
                    </DropdownItem>
                  );
                })}
              </div>
              <p className='all-apps'>
                View all apps <MdKeyboardArrowRight />
              </p>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className='header--icon'>
          <BiPulse onClick={openLeftBar} />
          <LeftBar visible={visible} openLeftBar={openLeftBar} />
        </div>
        <div className='header__profile'>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggleDropdown}
            setActiveFromChild={true}
          >
            <DropdownToggle caret className='header__profile-button'>
              <img src='/images/img6.jpg' alt='' onClick={toggleDropdown} />
              <div className='header__status-icon'></div>
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
              <DropdownItem onMouseEnter={mouseStatusEnter}>
                <div className='arrow'>
                  <span>Set status</span>
                  <MdKeyboardArrowDown className='is-open' />
                </div>
              </DropdownItem>
              <div
                className={isStatusHovered ? 'open' : 'close'}
                onMouseLeave={mouseStatusLeave}
              >
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
              <DropdownItem onMouseEnter={mouseSCustEnter}>
                <div className='arrow'>
                  <span>Customization</span>
                  <MdKeyboardArrowDown className='is-open' />
                </div>
              </DropdownItem>
              <div
                className={isCustHovered ? 'open-cust' : 'close'}
                onMouseLeave={mouseCustLeave}
              >
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
