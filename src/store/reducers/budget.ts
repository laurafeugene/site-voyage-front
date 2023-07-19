import client from '../../api';

export interface BudgetProps {
  budget: any;
  activitiesByDate?: {
    price: number;
  };
}

export async function getBudget() {
  try {
    const response = await client.axios.post('', {
      query: `query Query
            ($date: Date!, $activitiesByDateId: Int!, $travelId: Int!) {
            activitiesByDate(date: $date, id: $activitiesByDateId) {
                price
            }
            }
            `,
    });
    return response.data.data.activitiesByDate;
  } catch (error) {}
}
