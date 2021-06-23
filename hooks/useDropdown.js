import { useState } from 'react';

const useDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return [dropdownOpen, toggleDropdown];
};

export default useDropdown;
