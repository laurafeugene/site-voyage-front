import TravelForm from '../TravelForm/TravelForm';
import Presentation from './presentation/presentation';
// import Reviews from './reviews/Reviews';
import Tagline from '../TravelForm/Tagline';
import Banner from './Banner/Banner';

function Home() {
  return (
    <>
      <Banner />
      <Tagline text="Préparez votre voyage dès maintenant !" />
      <TravelForm />
      <Presentation />
      {/* <Reviews /> */}
    </>
  );
}

export default Home;
