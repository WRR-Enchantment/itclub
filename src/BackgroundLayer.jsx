// BackgroundLayer.jsx
export default function BackgroundLayerShape() {
  return (
    <div
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-0"
      style={{
        width: "980px", // ukuran aslinya
        height: "1531px",
        backgroundImage: `url('/bg.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto", // tetap ukurannya
        backgroundPosition: "bottom center",
        pointerEvents: "none",
      }}
    />
  );
}
