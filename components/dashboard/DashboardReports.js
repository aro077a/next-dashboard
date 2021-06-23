import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Line } from 'rc-progress';
import Title from '../title/Title';
import { reportsData } from './dashboardInfoData';
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

import Reports from './Reports';

const DashboardReports = () => {
  const [dropdownOpen, toggleDropdown] = useDropdown();
  return (
    <div className='reports'>
      <div className='reports__header'>
        <Title title='Reports overview' />
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle caret>
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
      <div className='reports__value'>
        <p>$7,431.14 USD</p>
        <Line
          percent={10}
          strokeWidth='1'
          strokeColor='#377dff'
          trailColor='#E7EAF3'
        />
      </div>
      {reportsData.map((report) => {
        return (
          <Reports
            key={report.id}
            title={report.title}
            value={report.value}
            high={report.high}
            medium={report.medium}
            low={report.low}
          />
        );
      })}
    </div>
  );
};

export default DashboardReports;
