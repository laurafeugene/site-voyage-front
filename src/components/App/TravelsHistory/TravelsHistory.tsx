import { useEffect, useState } from 'react';
import Tagline from '../TravelForm/Tagline';
import TravelForm from '../TravelForm/TravelForm';
import History from './History';
import { Travel, getHistoricTravels } from '../../../store/reducers/travels';

function TravelsHistory() {
  const [historicTravel, setHistoricTravel] = useState<Travel>({
    arrivalDate: '',
    departureDate: '',
    budget: '',
    title: '',
    to: '',
    numberOfTravelers: '',
  });
  useEffect(() => {
    getHistoricTravels(1).then((data) => {
      setHistoricTravel(data);
    });
  }, []);

  return (
    <>
      <Tagline text="Envie de partir de nouveau en voyage ?" />
      <TravelForm />
      <History
        arrivalDate={historicTravel.arrivalDate}
        departureDate={historicTravel.departureDate}
        budget={historicTravel.budget}
        title={historicTravel.title}
        to={historicTravel.to}
        numberOfTravelers={historicTravel.numberOfTravelers}
      />
    </>
  );
}

export default TravelsHistory;
