import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { TravelFormsProps } from '../../@types/travelers';

// A modifier pour appeler dans l'api de GetTravelByID
import RecapForm from './RecapForm';

import NavDay from './NavDay';
import GeneralTravelMain from './GeneralTravelMain';
import { getTravelById } from '../../store/reducers/travels';

function GeneralTravel() {
  // const [numberOfDays, setNumberOfDays] = useState<string[]>([]);
  const [travelForm, setTravelForm] = useState<TravelFormsProps>({
    numberOfTravelers: '',
    arrivalDate: '',
    departureDate: '',
    budget: '',
    title: '',
  });

  const { voyage } = useParams();

  useEffect(() => {
    getTravelById(voyage).then((data) => {
      setTravelForm(data);
    });
  }, [voyage]);

  return (
    <>
      <RecapForm
        arrivalDate={travelForm.arrivalDate}
        departureDate={travelForm.departureDate}
        budget={travelForm.budget}
        title={travelForm.title}
      />
      <NavDay
        startingDay={travelForm.departureDate}
        endingDay={travelForm.arrivalDate}
      />
      <GeneralTravelMain />
    </>
  );
}

export default GeneralTravel;
