import TravelForm from '../../TravelForm/TravelForm';
import Slider from './Slider/Slider';
import Presentation from './presentation/presentation';
import Reviews from './reviews/Reviews';
import Tagline from '../../TravelForm/Tagline';

function Home() {
  return (
    <>
      <Tagline text="Préparez votre voyage dès maintenant !" />
      <TravelForm />
      <Slider />
      <Presentation />
      <Reviews />
    </>
  );
}

export default Home;
