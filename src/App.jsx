import RecruitmentPage from "./RecruitmentPage";
import BackgroundLayer from "./BackgroundLayer"; // import di sini

function App() {
  return (
    <>
      <BackgroundLayer /> {/* tampilkan background di belakang */}
      <RecruitmentPage /> {/* konten utama */}
    </>
  );
}

export default App;
