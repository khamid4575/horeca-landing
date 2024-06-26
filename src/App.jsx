import HeroSection from "./components/HeroSection";
import Hotels from "./components/Hotels";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="2xl:w-[1700px] lg:w-[1200px] mx-auto">
        <Hotels />
      </div>
    </>
  );
}

export default App;
