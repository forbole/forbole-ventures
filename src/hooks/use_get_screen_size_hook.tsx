import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

function useGetScreenSizeHook() {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({});
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = windowSize.width ?? 0;
  const tablet = theme.breakpoints.values.tablet;
  const desktop = theme.breakpoints.values.desktop;

  return {
    windowSize,
    isDesktop: width >= desktop,
    isTablet: width >= tablet && width < desktop,
    isMobile: width < tablet,
  };
}

export { useGetScreenSizeHook };
