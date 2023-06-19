import axios from 'axios';


export interface RecapFormProps {
    title: string;
    departureDate: string;
    arrivalDate: string;
    budget: string;
}



export async function getRecapForm(id: number) {
    try {
        const response = await axios.post('https://qwikle-server.eddi.cloud/',
        {
            query:`query Query {
                travel(id: ${id}) {
                  arrivalDate
                  attendees {
                    firstname
                    lastname
                  }
                  budget
                  departureDate
                  numberOfAttendees
                  title
                }
              }
              `
            

        });
        return response.data.data.travel;
    } catch (error) {
        
    }
}
