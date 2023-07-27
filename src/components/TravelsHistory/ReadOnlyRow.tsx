import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

const ReadOnlyRow = ({ travel }) => {
  // Fonction pour formater la date en français
  function formatTravelDate(date: string) {
    dayjs.locale('fr');
    const parsedDate = dayjs(date, 'YYYY-MM-DD');
    const formattedDate = parsedDate.format('DD MMMM YYYY');
    return formattedDate;
  }
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <input
            type="checkbox"
            className=" accent-orange border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
          />
          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            <div>
              <NavLink key={travel.id} to={`/travels/${travel.id}`}>
                <h2 className="font-medium text-gray-800 dark:text-white ">
                  {travel.title}
                </h2>
              </NavLink>
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-center font-medium text-gray-700  dark:text-gray-300 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
          <h2 className="text-sm font-normal text-gray">{travel.to}</h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
          <h2 className="text-sm font-normal text-gray">
            {formatTravelDate(travel.departureDate)}
          </h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {formatTravelDate(travel.arrivalDate)}
      </td>
      <td className="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
          <h2 className="text-sm font-normal text-gray">
            {travel.numberOfTravelers}
          </h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            type="button"
            className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <button
            type="button"
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
