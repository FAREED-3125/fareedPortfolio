import { useEffect, useState } from "react";

const UseDimension = () => {
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidthChange = () => {
      setscreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidthChange);

    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  });

  return screenWidth;
};

export default UseDimension;
