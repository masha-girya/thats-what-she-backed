import { useEffect, useState } from "react";

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isNoteBook, setIsNoteBook] = useState(false);
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450);
      setIsTablet(window.innerWidth >= 450 && window.innerWidth < 800)
      setIsNoteBook(window.innerWidth >= 800 && window.innerWidth < 1200)
      setIsSmallDesktop(window.innerWidth >= 1200 && window.innerWidth < 1400)
      setIsDesktop(window.innerWidth >= 1400)
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return { isMobile, isTablet, isDesktop, isNoteBook, isSmallDesktop };
};
