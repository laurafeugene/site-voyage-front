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
    <div className="flex md:flex-col w-full sm:flex-col">
      {/* contenant le budget du voyage */}
      {/* <div className="flex flex-1 flex-col md:w-full sm:w-full m-2">
        <div className="grid h-20 card bg-lightest rounded-box place-items-center m-1">
          <h1> Vous avez dépensé : 1 000 000 000 € </h1>
        </div>
      </div> */}
      {/* contenant les activités du jour et les prochaines destinations activités du jour et étapes du voyage ce jour */}
      <div className="flex m-cold:flex md:w-full">
        {/* activités du jour */}

        <div className="flex flex-col w-full border-opacity-50 m-1">
          {activities &&
            activities.map((activity, index) => (
              <div
                key={index}
                className="grid h-20 card bg-lightest rounded-box place-items-center m-1"
              >
                {activity.name}

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
