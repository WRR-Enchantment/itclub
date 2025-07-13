import { useEffect, useState } from "react";

export default function BackgroundLayer() {
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => setVh(window.innerHeight);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full -z-10 overflow-hidden"
      style={{ height: `${vh}px` }}
    >
      <img
        src="/bg.jpg"
        alt="background"
        className="w-full h-full object-cover object-top"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}
