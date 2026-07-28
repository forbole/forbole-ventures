import { useState, useEffect } from "react";

export const useNavHook = () => {
  const [displayBackground, setDisplayBackground] = useState(false);
  useEffect(() => {
    const updateBackground = () => setDisplayBackground(window.scrollY > 0);

    updateBackground();
    window.addEventListener("scroll", updateBackground, { passive: true });

    return () => window.removeEventListener("scroll", updateBackground);
  }, []);

  return {
    displayBackground,
  };
};
