import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { RecapFormProps, getRecapForm } from '../../../store/reducers/dataForm';

import RecapForm from './RecapForm';

import NavDay from './NavDay';
import GeneralTravelMain from './GeneralTravelMain';

function GeneralTravel() {
  const [numberOfDays, setNumberOfDays] = useState<string[]>([]);
  const [recapForm, setRecapForm] = useState<RecapFormProps>({
    arrivalDate: '',
    departureDate: '',
    budget: '',
    title: '',
  });


  const { voyage } = useParams();

  useEffect(() => {
    getRecapForm(voyage).then((data) => {
      setRecapForm(data);
    });
  }, [voyage]);

  return (
    <>
      <RecapForm
        arrivalDate={recapForm.arrivalDate}
        departureDate={recapForm.departureDate}
        budget={recapForm.budget}
        title={recapForm.title}
      />
      <NavDay
        startingDay={recapForm.departureDate}
        endingDay={recapForm.arrivalDate}
      />
      <GeneralTravelMain />
    </>
  );
}

export default GeneralTravel;
