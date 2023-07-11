import TravelForm from '../TravelForm/TravelForm';
import Presentation from './presentation/presentation';
import Reviews from './reviews/Reviews';
import Tagline from '../TravelForm/Tagline';
import Carousel from './Carousel/Carousel';

function Home() {
  return (
    <>
      <Tagline text="Préparez votre voyage dès maintenant !" />
      <TravelForm />
      <Carousel />
      <Presentation />
      <Reviews />
    </>
  );
}

export default Home;
