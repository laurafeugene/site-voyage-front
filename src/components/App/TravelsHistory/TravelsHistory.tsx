import { useEffect, useState } from 'react';
import Tagline from '../TravelForm/Tagline';
import TravelForm from '../TravelForm/TravelForm';
import History from './History';
import { Travel, getHistoricTravels } from '../../../store/reducers/travels';

function TravelsHistory() {
  const [historicTravel, setHistoricTravel] = useState<Travel[]>([]);

  useEffect(() => {
    getHistoricTravels().then((data) => {
      setHistoricTravel(data);
    });
  }, []);

  return (
    <>
      <Tagline text="Envie de partir de nouveau en voyage ?" />
      <TravelForm />
      <History travels={historicTravel} />
    </>
  );
}

export default TravelsHistory;
