function BackgroundLayerShape() {
  return (
   <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
     style={{
       backgroundImage: "url('/bg.jpg')",
       backgroundAttachment: "fixed",
     }}
></div>
  );
}
export default BackgroundLayerShape;