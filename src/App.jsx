import Activities from "./componenets/Activities";
import Booking from "./componenets/Booking";
import Footer from "./componenets/Footer";
import FormFile from "./componenets/FormFile";
import Gallery from "./componenets/Gallery";
import Hero from "./componenets/Hero";
import NavBar from "./componenets/NavBar";
import TopBar from "./componenets/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <FormFile />
      <Footer />
    </>
  );
}

export default App;
