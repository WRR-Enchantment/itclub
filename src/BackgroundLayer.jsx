function BackgroundLayerShape() {
  return (
    <div
      className="absolute top-0 left-0 w-full min-h-[8000px] bg-no-repeat bg-[length:120%_auto] bg-top -z-10"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundColor: "#000",
      }}
    ></div>
  );
}
