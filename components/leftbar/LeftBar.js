import { Drawer } from 'antd';

const LeftBar = ({ visible, openLeftBar }) => {
  return (
    <Drawer
      title='Basic Drawer'
      placement='right'
      closable={false}
      onClose={openLeftBar}
      visible={visible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default LeftBar;
