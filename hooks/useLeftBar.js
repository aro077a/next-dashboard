import { useState } from 'react';

const useLeftBar = () => {
  const [visible, setVisible] = useState(false);

  const openLeftBar = () => setVisible(!visible);

  return [visible, openLeftBar];
};

export default useLeftBar;
