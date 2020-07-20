import React from "react";

export default function useResizeWindow() {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [size, setSize] = React.useState(getSize());

  React.useEffect(() => {
    const handleResize = () => setSize(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
