import { useEffect, useState } from "react";

export default function BackgroundLayerShape() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };

    // Set tinggi awal dan update saat resize
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full z-0 bg-cover bg-center"
      style={{
        height: `${height}px`,
        backgroundImage: "url('/bg.jpg')",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
