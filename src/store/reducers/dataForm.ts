import client from '../../api';

export interface RecapFormProps {
  title: string;
  departureDate: string;
  arrivalDate: string;
  budget: string;
  numberOfTravelers: number;
  travelers: {
    firstname: string;
    lastname: string;
  }[];
}

export async function getRecapForm(id: number) {
  try {
    const response = await client.axios.post('', {
      query: `query Query {
                travel(id: ${id}) {
                  arrivalDate
                  travelers {
                    firstname
                    lastname
                  }
                  budget
                  departureDate
                  numberOfTravelers
                  title
                }
              }
              `,
    });
    const data = response.data.data.travel;
    return data;
  } catch (error) {}
}
