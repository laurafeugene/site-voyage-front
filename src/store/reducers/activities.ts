import axios from 'axios';

export interface Activity {
  name: string;
  location: string;
  price: number;
  time: string;
}

export interface ActivityProps {
  activities: Activity[];
}

export async function getActivities() {
  try {
    const response = await axios.post('https://qwikle-server.eddi.cloud/', {
      query: `query ActivitiesByDate {
        me {
          travels {
            activities {
              name
              location
              price
              time
              category {
                name
              }
            }
            }
          }
        }
      }`,
    });
    return response.data.data.activities;
  } catch (error) {}
}
