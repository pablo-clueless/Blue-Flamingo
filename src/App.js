import Carousel from "./components/Carousel";
import { CarouselData } from "./components/CarouselData";
import Header from "./components/Header";

function App() {
  return (
    <div className='container'>
      <Header />
      <Carousel slides={CarouselData} />
    </div>
  );
}

export default App;
