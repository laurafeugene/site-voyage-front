import axios from 'axios';

export interface BudgetProps {
  budget: any;
  activitiesByDate?: {
    price: number;
  };
}

export async function getBudget() {
  try {
    const response = await axios.post(
      'https://sea-turtle-app-8gaer.ondigitalocean.app/graphql',
      {
        query: `query Query
            ($date: Date!, $activitiesByDateId: Int!, $travelId: Int!) {
            activitiesByDate(date: $date, id: $activitiesByDateId) {
                price
            }
            }
            `,
      }
    );
    return response.data.data.activitiesByDate;
  } catch (error) {}
}
