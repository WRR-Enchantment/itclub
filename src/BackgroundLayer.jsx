// BackgroundLayer.jsx
export default function BackgroundLayerShape() {
  return (
  <img
  src="/bg.jpg"
  alt="Background"
  className="fixed inset-0 w-full h-full object-cover z-[-10] select-none pointer-events-none"
  style={{
    width: '100vw',
    height: 'auto',
    objectFit: 'contain',
  }}
    />
  );
}
