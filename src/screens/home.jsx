import About from "../Componets/About";
import Packages from "../Componets/CheckoutPackages";
import Footer from "../Componets/Footer";
import Header from "../Componets/Header";
import Hero from "../Componets/Hero";
import Popular from "../Componets/Popular";
import TourSearch from "../Componets/TourSearch";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Hero />
      <TourSearch />
      <Popular />
      <Packages />
      <About />
      {/* <Contact /> */}
      <Footer />
      {/* <Booking /> */}
    </>
  );
};

export default HomeScreen;
