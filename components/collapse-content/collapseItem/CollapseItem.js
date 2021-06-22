import { MdKeyboardArrowDown } from 'react-icons/md';

const CollapseItem = ({
  isOpen,
  collapseIcon,
  collapseTitle,
  tag,
  isCollapseAble,
}) => {
  return (
    <>
      <div className={!isOpen ? 'collapsed__item' : 'collapsed__itemOpen'}>
        {collapseIcon}
        <span className='collapsed--title'>{collapseTitle}</span>
        {tag ? <p className='collapsed--tag'>{tag}</p> : null}
      </div>
      {isCollapseAble ? (
        <div className='collapsed__collapseIcon'>
          <MdKeyboardArrowDown
            className={isOpen ? 'collapsed--open' : 'collapsed--close'}
          />
        </div>
      ) : null}
    </>
  );
};

export default CollapseItem;
