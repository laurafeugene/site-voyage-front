import { useAppSelector } from '../../../hooks/redux';
import AddActivitiesTable from './ButtonAddActivitiesList';

function DayByDayMain() {
  const travels = useAppSelector((state) => state.travels);

  return (
    <div className="flex md:flex-col w-full sm:flex-col">
      {/* contenant le budget du voyage */}
      <div className="flex flex-1 flex-col md:w-full sm:w-full m-2">
        <div className="grid h-20 card bg-lightest rounded-box place-items-center m-1">
          <h1> Vous avez dépensé : 1 000 000 000 € </h1>
        </div>
      </div>
      {/* contenant les activités du jour et les prochaines destinations activités du jour et étapes du voyage ce jour */}
      <div className="flex m-cold:flex md:w-full">
        {/* activités du jour */}

        <div className="flex flex-col w-full border-opacity-50 m-1">
          {travels.map((travel) => (
            <div
              key={travel.id}
              className="grid h-20 card bg-lightest rounded-box place-items-center m-1"
            >
              {travel.name}
            </div>
          ))}
        </div>
      </div>

      {/* Prochaines destinations */}

      <div className="flex flex-col w-full border-opacity-50 m-1">
        {travel.map((travel) => (
          <div
            key={travel.id}
            className="grid h-20 card bg-lightest rounded-box place-items-center m-1"
          >
            {travel.location}
          </div>
        ))}

        <div className="">
          <div className="">{AddActivitiesTable()} </div>
        </div>
      </div>
    </div>
  );
}

export default DayByDayMain;
