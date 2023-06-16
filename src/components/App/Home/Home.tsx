import TravelForm from './TravelForm/TravelForm';
import Slider from './Slider/Slider';
import Presentation from './presentation/presentation';
import Reviews from './reviews/Reviews';
import GlobalPage from './TravelForm/GlobalPage';
import TitleTravelHomePage from './TravelForm/TilteHomePage';

function Home() {
  return (
    <>
      <TitleTravelHomePage />
      <TravelForm />
      <Slider />
      <Presentation />
      <Reviews />
    </>
  );
}

export default Home;
