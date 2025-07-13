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
      className="fixed top-0 left-0 w-full h-full -z-10 bg-no-repeat bg-center bg-cover"
      style={{
        height: `${vh}px`,
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundColor: "#000",
      }}
    ></div>
  );
}
