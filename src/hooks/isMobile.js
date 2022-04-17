import React, { useEffect, useState } from "react";

const IsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return width <= 1023;
};

export default IsMobile;
