import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import RecapForm from '../GeneralTravel/RecapForm';
import NavDay from '../GeneralTravel/NavDay';
import DayByDayMain from './DayByDayMain';
import { RecapFormProps, getRecapForm } from '../../../store/reducers/dataForm';
import { Activity, getActivities } from '../../../store/reducers/activities';
import { useParams } from 'react-router';

function DayByDay() {
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

  // function AllActivities() {
  //   const [activities, setActivities] = useState<Activity[]>([]);
  //   useEffect(() => {
  //     getActivities().then((data) => {
  //       setActivities(data);
  //     });
  //   }, []);
  //   return <DayByDayMain activities={activities} />;
  // }

  return (
    <>
      <RecapForm
        arrivalDate={recapForm.arrivalDate}
        departureDate={recapForm.departureDate}
        budget={recapForm.budget}
        title={recapForm.title}
      />
      <NavDay numberOfDays={numberOfDays} />
      {/* <AllActivities /> */}
    </>
  );
}

export default DayByDay;
