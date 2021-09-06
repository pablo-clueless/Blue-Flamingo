import Carousel from "./components/Carousel";
import { CarouselData } from "./components/CarouselData";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className='container'>
      <Header />
      <Carousel slides={CarouselData} />
      <Footer />
    </div>
  );
}

export default App;
