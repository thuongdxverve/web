import {useEffect, useState} from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const ua = window.navigator.userAgent;
      console.log(ua);
      return (
        ua.indexOf("iPhone") > 0 ||
        ua.indexOf("iPod") > 0 ||
        (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
      );
    };
    setIsMobile(checkIsMobile());
  }, []);

  return isMobile;
};