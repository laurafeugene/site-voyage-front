import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import { Travel } from '../../../store/reducers/travels';
import 'dayjs/locale/fr';

function History(props: TravelsProps) {
  const { travels } = props;
  // Fonction pour formater la date en français
  function formatTravelDate(date: string) {
    dayjs.locale('fr');
    const parsedDate = dayjs(date, 'YYYY-MM-DD');
    const formattedDate = parsedDate.format('DD MMMM YYYY');
    return formattedDate;
  }
  return (
    <div className="overflow-x-auto m-8">
      <table className="table mx-auto max-w-7xl">
        {/* head */}
        <thead>
          <tr>
            <th />
            <th className="text-xl text-darkest text-center">Vos voyages</th>
            <th className="text-xl  text-darkest text-center">Destination</th>
            <th className="text-xl  text-darkest text-center">Participants</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {travels &&
            travels.map((travel, index) => (
              <tr key={index}>
                <td>
                  <div className="flex justify-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="src/assets/marek-piwnicki-jFukTjphXbI-unsplash.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold">{travel.title}</div>
                      <span className="badge badge-ghost badge-sm">
                        {formatTravelDate(travel.departureDate)} -{' '}
                        {formatTravelDate(travel.arrivalDate)}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <div className="text-center">{travel.to}</div>
                  <br />
                </td>
                <td className="text-center">{travel.numberOfTravelers}</td>
                <th>
                  <NavLink
                    to={`${travel.id}`}
                    className="text-lightest bg-darkest hover:bg-darkest-700 hover:text-lightest rounded-md px-3 py-2 text-sm font-medium"
                  >
                    En savoir plus
                  </NavLink>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

interface TravelsProps {
  travels: Travel[];
}

export default History;
