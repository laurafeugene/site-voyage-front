import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import dayjs from 'dayjs';

function NavigationByDay({
  startingDay,
  endingDay,
}: {
  startingDay: string;
  endingDay: string;
}) {
  function getDates(startDate: string, endDate: string) {
    const dateArray = [];
    let currentDate = dayjs(startDate);
    const lastDate = dayjs(endDate);
    while (currentDate <= lastDate) {
      dateArray.push(dayjs(currentDate).format('YYYY-MM-DD'));
      currentDate = dayjs(currentDate).add(1, 'days');
    }
    return dateArray;
  }
  const numberOfDays = getDates(startingDay, endingDay);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { voyage } = useParams();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="tabs bg-darkest tabs-boxed m-2 flex justify-between">
        <div className="flex justify-start">
          <NavLink
            to={`/travels/${voyage}`}
            className="tab text-lightest hover:bg-lightest hover:text-darkest font-semibold m-1"
          >
            Récapitulatif
          </NavLink>
        </div>

        {/* Menu déroulant pour les jours */}

        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="tab text-lightest hover:bg-lightest hover:text-darkest font-semibold m-1 flex-shrink-0 focus:outline-none"
          >
            Jours <span className="ml-1">&#9660;</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-1 rounded-md shadow-lg max-h-48 overflow-y-auto bg-lightest w-40 z-50">
              {numberOfDays.map((day, index) => (
                <NavLink
                  to={`/travels/${voyage}/day/${day}`}
                  className="block px-4 py-2 text-sm text-darkest hover:bg-darkest hover:text-lightest"
                  key={index}
                >
                  Jour {index + 1}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationByDay;
