import { NavLink } from 'react-router-dom';

function History() {
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
                  <div className="font-bold">Les copains en vacances</div>
                  <span className="badge badge-ghost badge-sm">
                    15/07/2021 - 30/07/2021
                  </span>
                </div>
              </div>
            </td>
            <td className="text-center">
              <div className="text-center">Bali</div>
              <br />
            </td>
            <td className="text-center">5</td>
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
                <div>
                  <div className="font-bold">Fiesta in Barcelona </div>
                  <span className="badge badge-ghost badge-sm">
                    15/07/2021 - 30/07/2021
                  </span>
                </div>
              </div>
            </td>
            <td className="text-center">
              Barcelone
              <br />
            </td>
            <td className="text-center">2</td>
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
                <div>
                  <div className="font-bold">Week-end fin juillet</div>
                  <span className="badge badge-ghost badge-sm">
                    15/07/2021 - 30/07/2021
                  </span>
                </div>
              </div>
            </td>
            <td className="text-center">
              Prague
              <br />
            </td>
            <td className="text-center">16</td>
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
                <div>
                  <div className="font-bold">Let's gooo NYC</div>
                  <span className="badge badge-ghost badge-sm">
                    15/07/2021 - 30/07/2021
                  </span>
                </div>
              </div>
            </td>
            <td className="text-center">
              New York
              <br />
            </td>
            <td className="text-center">9</td>
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
