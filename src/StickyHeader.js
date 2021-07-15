import { useState, useEffect, useRef, useCallback } from "react";

const StickyHeader = (defaultSticky = false) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const headerRef = useRef(null);
  
  
  const toggleSticky = useCallback(
    ({ top, bottom }) => {
      if (top <= 0 && bottom > 2 * 68) {
        !isSticky && setIsSticky(true);
      } else {
        isSticky && setIsSticky(false);
      }
    },
    [isSticky]
  );
  
  useEffect(() => {
    const handleScroll = () => {
      toggleSticky(headerRef.current.getBoundingClientRect());
    };
    window.addEventListener("scroll", handleScroll,{ passive: true});
    return () => {
      window.removeEventListener("scroll", handleScroll,{ passive: true});
    };
  }, [toggleSticky]);
  
  return { headerRef, isSticky };
};
export default StickyHeader;
