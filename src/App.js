import About from "./components/About";
import Carousel from "./components/Carousel";
import { CarouselData } from "./components/CarouselData";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reservations from "./components/Reservations";
import Services from "./components/Services";

function App() {
  return (
    <div className='container'>
      <Header />
      <Carousel slides={CarouselData} />
      <About />
      <Services />
      <Reservations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
