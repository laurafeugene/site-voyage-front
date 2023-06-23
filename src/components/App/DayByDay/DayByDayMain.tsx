import { ActivityState } from '../../../store/reducers/activities';
import AddActivities from './ButtonAddActivities';

function DayByDayMain(props: ActivityState) {
  const { activities } = props;

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
          {activities &&
            activities.map((activity, index) => (
              <div
                key={index}
                className="grid h-20 card bg-lightest rounded-box place-items-center m-1"
              >
                {activity.name}
              </div>
            ))}

          <div className="">{AddActivities()} </div>
        </div>
      </div>

      {/* Prochaines destinations */}

      <div className="flex flex-col w-full border-opacity-50 m-1">
        {activities &&
          activities.map((activity, index) => (
            <div
              key={index}
              className="grid h-20 card bg-lightest rounded-box place-items-center m-1"
            >
              {activity.location}
            </div>
          ))}

        <div className="">
          <button
            type="submit"
            className="btn btn-darkest bg-darkest text-lightest w-full hover:bg-lightest hover:text-darkest"
          >
            Ajouter une étape
          </button>
        </div>
      </div>
    </div>
  );
}

export default DayByDayMain;
