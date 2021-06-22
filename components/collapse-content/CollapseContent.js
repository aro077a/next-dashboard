import useCollapse from '../../hooks/useCollapse';
import { Collapse } from 'reactstrap';

import Title from '../title/Title';
import CollapseItem from './collapseItem/CollapseItem';

const CollapseContent = ({
  tag,
  title,
  collapseTitle,
  isCollapseAble,
  collapseIcon,
  collapseChilds,
  openMenu,
}) => {
  const [isOpen, toggleCollapse] = useCollapse();
  const { isOpen: isChildOpen, toggleCollapse: toggleChildCollapse } =
    useCollapse();

  return (
    <div className='collapsed'>
      {!openMenu && title ? <Title title={title} /> : null}
      <div
        className='collapsed__header'
        onClick={!openMenu && isCollapseAble ? toggleCollapse : null}
      >
        <CollapseItem
          isOpen={isOpen}
          collapseIcon={collapseIcon}
          tag={tag}
          isCollapseAble={isCollapseAble}
          collapseTitle={collapseTitle}
          collapseChilds={collapseChilds}
        />
      </div>
      <Collapse isOpen={isOpen} className='collapsed__child'>
        {collapseChilds?.map((child) => {
          return (
            <Collapse isOpen={isChildOpen} className='collapsed__subChild' key={child.id}>
              <div
                className='collapsed__subItem'
                onClick={child.isChildCollapseAble ? toggleChildCollapse : null}
              >
                <CollapseItem
                  isOpen={isChildOpen}
                  tag={child.count}
                  isCollapseAble={child.isChildCollapseAble}
                  collapseTitle={child.title}
                />
              </div>
            </Collapse>
          );
        })}
      </Collapse>
    </div>
  );
};

export default CollapseContent;
