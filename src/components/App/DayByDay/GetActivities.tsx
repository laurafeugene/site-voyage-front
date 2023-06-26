import { useEffect, useState } from 'react';
import { Activity, getActivities } from '../../../store/reducers/activities';
import DayByDayMain from './DayByDayMain';

function AllActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    getActivities().then((data) => {
      setActivities(data);
    });
  }, []);
  return <DayByDayMain activities={activities} />;
}

export default AllActivities;
