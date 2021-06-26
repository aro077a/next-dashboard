import { Drawer } from 'antd';

const LeftBar = ({ visible, openLeftBar, children, className, title }) => {
  return (
    <Drawer
      title={title}
      placement='right'
      closable={true}
      onClose={openLeftBar}
      visible={visible}
      className={className}
    >
      {children}
    </Drawer>
  );
};

export default LeftBar;
