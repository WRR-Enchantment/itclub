// BackgroundLayer.jsx
export default function BackgroundLayerShape() {
  return (
   <img
      src="/bg.jpg"
      alt="Background"
      className="fixed top-0 left-0 w-screen h-screen object-cover z-[-10] select-none pointer-events-none"
  style={{
    width: '100vw',
    height: 'auto',
    objectFit: 'contain',
  }}
    />
  );
}
