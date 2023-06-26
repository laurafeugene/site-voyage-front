import { useParams } from 'react-router';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../hooks/redux';
import AddActivitiesTable from './ButtonAddActivitiesList';
import { getActivityByDate } from '../../../store/reducers/activities';

async function DayByDayMain() {
  const dispatch = useAppDispatch();
  const voyageId = Number(useParams().voyage);
  const date = useParams().jour;
  const activities = await dispatch(
    getActivityByDate({ travelId: voyageId, date })
  );
  console.log(activities);
  return (
    <div>
      juste afficher les activités du voyage mettre des conditions avec avec un
      if si pas de travel
      <AddActivitiesTable />
      <div>
        {/* Affichez d'autres informations sur l'activité si nécessaire */}
        {activities.map((activity) => (
          <div key={activity.id}>
            <div>
              <h2>{activity.name}</h2>
              <p>{activity.price}</p>
              <p>{activity.location}</p>
              <p>{activity.members}</p>
              <p>{activity.time}</p>
              <p>{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayByDayMain;
