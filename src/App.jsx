import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HotelsInActive from "./components/HotelsInActive";
import HotelsInConstruction from "./components/HotelsInConstruction";
import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";
import Services from "./components/Services";
import Shipping from "./components/Shipping";
import ScrollToTopIcon from "./components/ui/ScrollToTopIcon";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="2xl:w-[1700px] lg:w-[1200px] mx-auto">
        <ScrollToTopIcon/>
        <HotelsInConstruction />
        <HotelsInActive />
        <Restaurants />
        <Services />
        <Shipping />
        <Contacts />
      </div>
      <Footer />
    </>
  );
}

export default App;
