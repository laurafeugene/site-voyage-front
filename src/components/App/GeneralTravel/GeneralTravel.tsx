import { useEffect, useState } from 'react';
import RecapForm from './RecapForm';
import { RecapFormProps, getRecapForm } from '../../../store/reducers/dataForm';
import NavDay from './NavDay';
import GeneralTravelMain from './GeneralTravelMain';

function GeneralTravel() {
  const [recapForm, setRecapForm] = useState<RecapFormProps>({
    arrivalDate: '',
    departureDate: '',
    budget: '',
    title: '',
  });

  useEffect(() => {
    getRecapForm(1).then((data) => {
      // remplacer le 2 par l'id de l'url du voyage
      setRecapForm(data);
    });
  }, []);

  return (
    <>
      <RecapForm
        arrivalDate={recapForm.arrivalDate}
        departureDate={recapForm.departureDate}
        budget={recapForm.budget}
        title={recapForm.title}
      />
      <NavDay />
      <GeneralTravelMain />
    </>
  );
}

export default GeneralTravel;
