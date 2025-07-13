// BackgroundLayer.jsx
export default function BackgroundLayerShape() {
  return (
    <div
      className="fixed bottom-0 left-0 w-full h-full z-0"
     style={{
     backgroundImage: "url('/bg.jpg')",
     backgroundSize: "contain",
     backgroundRepeat: "no-repeat",
     backgroundPosition: "bottom center",
     pointerEvents: "none",
     transform: "scale(4.3)", // 🔍 perbesar 120%
     transformOrigin: "bottom center", // penting: agar scaling tetap dari bawah
}}
    />
  );
}
