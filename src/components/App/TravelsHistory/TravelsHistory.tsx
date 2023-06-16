import TitleTravelHomePage from '../Home/TravelForm/TilteHomePage';
import TravelForm from '../Home/TravelForm/TravelForm';
import History from './History';

function TravelsHistory() {
  return (
    <>
      <TitleTravelHomePage text="Envie de partir de nouveau en voyage ?" />
      <TravelForm />
      <History />
    </>
  );
}

export default TravelsHistory;
