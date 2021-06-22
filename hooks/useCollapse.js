import { useState } from 'react';

const useCollapse = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, toggleCollapse];
};

export default useCollapse;
