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
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-darkest-800 dark:border-darkest-700 dark:shadow-slate-700/[.7]">
                <div className="bg-darkest-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-darkest-800 dark:border-darkest-700">
                  <p className="mt-1 text-sm text-darkest-500 dark:text-darkest-500">
                    {activity.category.name} Catégorie
                  </p>
                  <div className="p-4 md:p-5">
                    <h2 className="text-lg font-bold text-darkest-800 dark:text-white">
                      {activity.name}
                    </h2>
                  </div>
                  <p className="mt-2 text-darkest-800 dark:text-darkest-400">
                    {activity.price}
                  </p>
                  <p className="mt-2 text-darkest-800 dark:text-darkest-400">
                    {activity.location}
                  </p>
                  <p className="mt-2 text-darkest-800 dark:text-darkest-400">
                    {activity.members}
                  </p>
                  <p className="mt-2 text-darkest-800 dark:text-darkest-400">
                    {activity.time}
                  </p>
                  <p className="mt-2 text-darkest-800 dark:text-darkest-400">
                    {activity.date}
                  </p>
                </div>
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
