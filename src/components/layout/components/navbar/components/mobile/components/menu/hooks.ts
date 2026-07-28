import { useState } from "react";

export const useLanguageDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((isOpen) => !isOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return {
    toggleDrawer,
    closeDrawer,
    drawerOpen,
  };
};
