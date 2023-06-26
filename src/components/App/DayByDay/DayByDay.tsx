import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useParams } from 'react-router';
import RecapForm from '../GeneralTravel/RecapForm';
import NavDay from '../GeneralTravel/NavDay';
import { RecapFormProps, getRecapForm } from '../../../store/reducers/dataForm';
import AllActivities from './GetActivities';
import { useAppDispatch } from '../../../hooks/redux';
import { getAllTravels } from '../../../store/reducers/travels';

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

  const [numberOfDays, setNumberOfDays] = useState<number>(0);
  const { voyage } = useParams();

  useEffect(() => {
    getRecapForm(voyage).then((data) => {
      setRecapForm(data);
    });
  }, [voyage]);

  useEffect(() => {
    if (recapForm.arrivalDate && recapForm.departureDate) {
      const arrivalDay = dayjs(recapForm.arrivalDate);
      const departureDay = dayjs(recapForm.departureDate);
      const duration = Math.abs(departureDay.diff(arrivalDay, 'day')); // Utilisation de Math.abs() pour obtenir la valeur absolue
      console.log('Nombre de jours entre les dates : ', duration);
      setNumberOfDays(duration);
    }
  }, [recapForm]);

  return (
    <>
      <RecapForm
        arrivalDate={recapForm.arrivalDate}
        departureDate={recapForm.departureDate}
        budget={recapForm.budget}
        title={recapForm.title}
      />
      <NavDay numberOfDays={numberOfDays} />
      <AllActivities />
    </>
  );
}

export default DayByDay;
