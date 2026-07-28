import { useState } from "react";

export const useMobileNavHook = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleNavMenus = () => setIsMenu((isOpen) => !isOpen);
  const closeAll = () => setIsMenu(false);

  return {
    toggleNavMenus,
    closeAll,
    isMenu,
    isOpen: isMenu,
  };
};
