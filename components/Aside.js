import { collapseData } from '../data/collapseData';
import CollapseContent from './collapse-content/CollapseContent';
import { BiHelpCircle } from 'react-icons/bi';
import { MdTune } from 'react-icons/md';

const Aside = ({ openMenu }) => {
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
          <BiHelpCircle />
        </div>
        <div className='aside--lang'>
          <img src='/icons/us.svg' />
        </div>
      </section>
    </aside>
  );
};

export default Aside;
