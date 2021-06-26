import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdOpenInNew } from 'react-icons/md';
import Title from '../title/Title';
import Button from '../button/Button';
import { userImportData } from './dashboardInfoData';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { CgShare } from 'react-icons/cg';
import { IoMdDownload } from 'react-icons/io';
import { BiChat } from 'react-icons/bi';
import { BsAlt } from 'react-icons/bs';
import useDropdown from '../../hooks/useDropdown';

const DashboardUsersImport = () => {
  const [dropdownOpen, toggleDropdown] = useDropdown();

  return (
    <div className='user-import__main'>
      <div className='user-import__header'>
        <Title title='Import data into Front Dashboard' />
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle caret className='user-import-button'>
            <BiDotsVerticalRounded onClick={toggleDropdown} />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Settings</DropdownItem>
            <DropdownItem>
              <CgShare /> <span>Share chart</span>
            </DropdownItem>
            <DropdownItem>
              <IoMdDownload />
              <span>Download</span>
            </DropdownItem>
            <DropdownItem>
              <BsAlt />
              <span>Connect other apps</span>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem header>Feedback</DropdownItem>
            <DropdownItem>
              <BiChat />
              <span>Report</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className='user-import__desc'>
        <p className='user-import--info'>
          See and talk to your users and leads immediately by importing your
          data into the Front Dashboard platform.
        </p>
        <Title title='Import users from:' />
      </div>
      {userImportData.map((item) => {
        return (
          <div className='user-import__content' key={item.id}>
            <div className='user-import__content-item'>
              <div className='user-import__icon'>{item.icon}</div>
              <div className='user-import__box'>
                <p className='user-import--title'>{item.title}</p>
                <p className='user-import--text'>{item.info}</p>
              </div>
            </div>
            <Button
              buttonText='Launch importer'
              postIcon={<MdOpenInNew />}
              className='user-import'
            />
          </div>
        );
      })}
      <span className='user-import__footer'>
        Or you can
        <span>sync data to Front Dashboard</span>
        to ensure your data is always up-to-date.
      </span>
    </div>
  );
};

export default DashboardUsersImport;
