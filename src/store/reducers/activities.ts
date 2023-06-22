import axios from 'axios';

export interface ActivityProps {
  name: string;
  categoryId: number;
  travelId: number;
  id: number;
  time: string;
  date: string;
  location: string;
  members: string[];
}

export interface Activities {
  activities: ActivityProps[];
}

export async function getActivities() {
  try {
    const response = await axios.post('https://qwikle-server.eddi.cloud/', {
      query: `query Query($date: Date!, $activitiesByDateId: Int!) {
        activitiesByDate(date: $date, id: $activitiesByDateId) {
          time
          price
          name
          location
          date
          categoryId
        }
      }`,
    });
    return response.data.data.activities;
  } catch (error) {}
}
