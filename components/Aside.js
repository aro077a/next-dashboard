import { collapseData } from '../data/collapseData';
import CollapseContent from './collapse-content/CollapseContent';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { BiHelpCircle, BiChat } from 'react-icons/bi';
import { RiBookReadLine, RiCommandLine } from 'react-icons/ri';
import { MdTune } from 'react-icons/md';
import { BsAlt } from 'react-icons/bs';
import { AiOutlineGift } from 'react-icons/ai';
import useDropdown from '../hooks/useDropdown';

const Aside = ({ openMenu }) => {
  const [dropdownOpen, toggleDropdown] = useDropdown();

  return (
    <aside className={openMenu ? 'asideClosed' : 'aside '}>
      <section className='aside__content asideClosed__content '>
        <div className='aside__image asideClosed__image'>
          <img
            src={openMenu ? '/icons/logo-short.svg' : '/icons/logo.svg'}
            alt='logo'
          />
        </div>
        <div>
          {collapseData?.map((item) => {
            return (
              <CollapseContent
                key={item.id}
                title={item.title}
                tag={item.tag}
                collapseIcon={item.collapseIcon}
                collapseTitle={item.collapseTitle}
                isCollapseAble={item.isCollapseAble}
                collapseChilds={item.collapseChilds}
                openMenu={openMenu}
              />
            );
          })}
        </div>
      </section>
      <section className='aside__footer asideClosed__footer'>
        <div className='aside--tune'>
          <MdTune />
        </div>
        <div className='aside--help'>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
              <BiHelpCircle onClick={toggleDropdown} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Help</DropdownItem>
              <DropdownItem>
                <RiBookReadLine /> <span>Resources & tutorials</span>
              </DropdownItem>
              <DropdownItem>
                <RiCommandLine />
                <span>Keyboard shortcuts</span>
              </DropdownItem>
              <DropdownItem>
                <BsAlt />
                <span>Connect other apps</span>
              </DropdownItem>
              <DropdownItem>
                <AiOutlineGift />
                <span>What's new?</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem header>Contacts</DropdownItem>
              <DropdownItem>
                <BiChat />
                <span>Contact support</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className='aside--lang'>
          <img src='/icons/us.svg' />
        </div>
      </section>
    </aside>
  );
};

export default Aside;
