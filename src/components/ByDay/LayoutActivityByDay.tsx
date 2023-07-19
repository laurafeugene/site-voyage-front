import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RecapForm from '../GeneralTravel/RecapForm';
import NavDay from '../GeneralTravel/NavDay';
import { RecapFormProps, getRecapForm } from '../../store/reducers/dataForm';
import AllActivities from './GetActivities';
import { useAppDispatch } from '../../hooks/redux';
import { getAllTravels } from '../../store/reducers/travels';
import Tagline from '../TravelForm/Tagline';

function DayByDay() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllTravels());
  }, [dispatch]);

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
  }, [voyage, recapForm.arrivalDate, recapForm.departureDate]);

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
      <AllActivities />
    </>
  );
}

export default DayByDay;
