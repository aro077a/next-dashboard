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
import { useState } from 'react';

const Aside = ({ openMenu }) => {
  const [dropdownOpen, toggleDropdown] = useDropdown();
  const [openLang, setOpenLang] = useState(false);

  const toggleDropdownContent = () => {
    setOpenLang(!openLang);
  };

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
            <DropdownToggle caret className='aside--button'>
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
          <Dropdown isOpen={openLang} toggle={toggleDropdownContent}>
            <DropdownToggle caret className='aside--lang-button'>
              <img src='/icons/us.svg' onClick={toggleDropdownContent} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>select language</DropdownItem>
              <DropdownItem>
                <img src='/icons/1.svg' alt='us' /> <span>English (US)</span>
              </DropdownItem>
              <DropdownItem>
                <img src='/icons/2.svg' alt='uk' /> <span>England (UK)</span>
              </DropdownItem>
              <DropdownItem>
                <img src='/icons/3.svg' alt='du' /> <span>Deutsch</span>
              </DropdownItem>
              <DropdownItem>
                <img src='/icons/4.svg' alt='dn' /> <span>Dansk</span>
              </DropdownItem>
              <DropdownItem>
                <img src='/icons/5.svg' alt='it' /> <span>Italiano</span>
              </DropdownItem>
              <DropdownItem>
                <img src='/icons/6.svg' alt='cn' /> <span>Chinese</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </section>
    </aside>
  );
};

export default Aside;
