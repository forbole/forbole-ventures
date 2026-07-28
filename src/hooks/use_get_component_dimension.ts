import {
  useEffect,
  useState,
  useRef,
} from 'react';

/**
 * Nav hook helper to get the component height
 */
export const useGetComponentDimension = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateSize = () => {
      setHeight(element.clientHeight);
      setWidth(element.clientWidth);
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return {
    width,
    height,
    ref,
  };
};
