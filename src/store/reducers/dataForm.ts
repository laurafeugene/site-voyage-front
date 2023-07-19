import client from '../../api';

export interface RecapFormProps {
  title: string;
  departureDate: string;
  arrivalDate: string;
  budget: string;
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
    return response.data.data.travel;
  } catch (error) {}
}
