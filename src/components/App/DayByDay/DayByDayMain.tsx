import { useAppSelector } from '../../../hooks/redux';
import AddActivitiesTable from './ButtonAddActivitiesList';
import { Travel } from '../../../store/reducers/travels';

function DayByDayMain() {
  const travels = useAppSelector((state) => state.travels.travels);

  return (
    <div className="flex md:flex-col w-full sm:flex-col">
      {/* card pour créer une nouvelle activité */}
      <div className="">
        <div className="">{AddActivitiesTable()} </div>
      </div>
      <div className="flex flex-1 flex-col md:w-full sm:w-full m-2" />
      {/* contenant les activités du jour et les prochaines destinations activités du jour et étapes du voyage ce jour */}
      <div className="flex m-cold:flex md:w-full">
        {/* activités du jour */}

        <div className="flex flex-col w-full border-opacity-50 m-1">
          {travels.map((travel) => (
            <div
              key={travel.id}
              className="grid h-20 card bg-lightest rounded-box place-items-center m-1"
            >
              <p>{travel.activities.name}</p>
              <p>{travel.activities.price}</p>
              <p>{travel.activities.location}</p>
              <p>{travel.activities.members}</p>
              <p>{travel.activities.time}</p>
              <p>{travel.activities.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DayByDayMain;
