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
      <div className="h-screen overflow-hidden flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4" />
          <AddActivitiesTable />
          <div>
            {/* Afficher les activités */}
            {activities && activities.length > 0 ? (
              activities.map((activity) => (
                <div key={activity.id}>
                  <div className="relative bg-lightest-200 py-6 px-6 rounded-md w-64 my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-2xl py-4 px-4 shadow-xl bg-darkest left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                        fill="white"
                      >
                        <path d="M303.077-104.923v-357.692q-45.654-6.462-77.596-41.481-31.943-35.019-31.943-85.314v-266.282h36.924v266.153h72.615v-266.153H340v266.153h72v-266.153h36.923v266.282q0 50.295-31.634 85.314-31.635 35.019-77.289 41.481v357.692h-36.923Zm363.692 0v-317.538h-96v-255.693q0-64.963 35.885-115.828 35.885-50.864 97.039-59.557v748.616h-36.924Z" />
                      </svg>
                    </div>
                    <div className="mt-8">
                      <p className="text-xl font-semibold my-2">
                        {activity.name}
                      </p>
                      <div className="flex space-x-2 text-darkest-400 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p>{activity.location}</p>
                      </div>
                      <div className="flex space-x-2 text-darkest-400 text-sm my-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p>{activity.date}</p>
                      </div>
                      <div className="border-t-2" />

                      <div className="flex justify-between">
                        <div className="my-2">
                          <p className="font-semibold text-base mb-2">
                            Participants :
                          </p>
                          <div className="flex space-x-2">
                            {activity.members}
                          </div>
                        </div>
                        <div className="my-2">
                          <p className="font-semibold text-base mb-2">Prix</p>
                          <div className="text-base text-darkest-400 font-semibold">
                            <p>{activity.price} € </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Aucune activité trouvée pour ce jour</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayByDayMain;
