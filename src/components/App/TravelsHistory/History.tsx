import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import { Travel } from '../../../store/reducers/travels';
import 'dayjs/locale/fr';

function History(props: Travel) {
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
          {/* row 1 */}
          <tr>
            <th />
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
                  <div className="font-bold">{props.title}</div>
                  <span className="badge badge-ghost badge-sm">
                    {formatTravelDate(props.departureDate)} -{' '}
                    {formatTravelDate(props.arrivalDate)}
                  </span>
                </div>
              </div>
            </td>
            <td className="text-center">
              <div className="text-center">{props.to}</div>
              <br />
            </td>
            <td className="text-center">{props.numberOfAttendees}</td>
            <th>
              <NavLink
                to="#"
                className="text-lightest bg-darkest hover:bg-darkest-700 hover:text-lightest rounded-md px-3 py-2 text-sm font-medium"
              >
                En savoir plus
              </NavLink>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <th />
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
                  <div className="font-bold">{props.title}</div>
                  <span className="badge badge-ghost badge-sm">
                    {formatTravelDate(props.departureDate)} -{' '}
                    {formatTravelDate(props.arrivalDate)}
                  </span>
                </div>
              </div>
            </td>
            <td className="text-center">
              <div className="text-center">{props.to}</div>
              <br />
            </td>
            <td className="text-center">{props.numberOfAttendees}</td>
            <th>
              <NavLink
                to="#"
                className="text-lightest bg-darkest hover:bg-darkest-700 hover:text-lightest rounded-md px-3 py-2 text-sm font-medium"
              >
                En savoir plus
              </NavLink>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <th />
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
                  <div className="font-bold">{props.title}</div>
                  <span className="badge badge-ghost badge-sm">
                    {formatTravelDate(props.departureDate)} -{' '}
                    {formatTravelDate(props.arrivalDate)}
                  </span>
                </div>
              </div>
            </td>
            <td className="text-center">
              <div className="text-center">{props.to}</div>
              <br />
            </td>
            <td className="text-center">{props.numberOfAttendees}</td>
            <th>
              <NavLink
                to="#"
                className="text-lightest bg-darkest hover:bg-darkest-700 hover:text-lightest rounded-md px-3 py-2 text-sm font-medium"
              >
                En savoir plus
              </NavLink>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <th />
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
                  <div className="font-bold">{props.title}</div>
                  <span className="badge badge-ghost badge-sm">
                    {formatTravelDate(props.departureDate)} -{' '}
                    {formatTravelDate(props.arrivalDate)}
                  </span>
                </div>
              </div>
            </td>
            <td className="text-center">
              <div className="text-center">{props.to}</div>
              <br />
            </td>
            <td className="text-center">{props.numberOfAttendees}</td>
            <th>
              <NavLink
                to="#"
                className="text-lightest bg-darkest hover:bg-darkest-700 hover:text-lightest rounded-md px-3 py-2 text-sm font-medium"
              >
                En savoir plus
              </NavLink>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default History;
