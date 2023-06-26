import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import AddActivitiesTable from './ButtonAddActivitiesList';
import { getActivityByDate } from '../../../store/reducers/activities';

function DayByDayMain() {
  const [activities, setActivities] = useState();
  const dispatch = useAppDispatch();
  const voyageId = Number(useParams().voyage);
  const date = useParams().jour;
  useEffect(() => {
    getActivityByDate({
      date,
      travelId: voyageId,
    }).then((res) => {
      setActivities(res);
    });
  }, [dispatch, voyageId, date]);

  return (
    <div>
      <AddActivitiesTable />
      <div>
        {/* Afficher les activités */}
        {activities && activities.length > 0 ? (
          activities.map((activity) => (
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
          ))
        ) : (
          <p>Aucune activité trouvée pour ce jour</p>
        )}
      </div>
    </div>
  );
}

export default DayByDayMain;
