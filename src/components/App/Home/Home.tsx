import TravelForm from '../TravelForm/TravelForm';
// import Reviews from './reviews/Reviews';
import Tagline from '../TravelForm/Tagline';
import Banner from './Banner/Banner';
import ListFeatures from './ListFeatures/ListFeatures';

function Home() {
  return (
    <>
      <Banner />
      <Tagline text="Préparez votre voyage dès maintenant !" />
      <TravelForm />
      <ListFeatures />
      {/* <Reviews /> */}
    </>
  );
}

export default Home;
