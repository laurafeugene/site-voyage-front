import axios from 'axios';

export interface RecapFormProps {
  title: string;
  departureDate: string;
  arrivalDate: string;
  budget: string;
}

export async function getRecapForm(id: number) {
  try {
    const response = await axios.post('https://qwikle-server.eddi.cloud/', {
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
