import { useEffect, useState } from "react";

export default function BackgroundLayer() {
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full bg-cover bg-center bg-no-repeat -z-10"
      style={{
        backgroundImage: "url('/bg.jpg')",
        height: `${vh}px`,
        backgroundColor: "#000", // fallback
        backgroundAttachment: "fixed", // supaya diam saat scroll
      }}
    ></div>
  );
}
