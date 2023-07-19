import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import countryData from '../../data/countryData';
import { createTravel } from '../../store/reducers/travels';

function TravelForm() {
  const [countrySearch, setCountrySearch] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [numberOfTravelers, setNumberOfTravelers] = useState(0);
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const countryInput = useRef(null);
  const userId = useAppSelector((state) => state.user.id);

  function handleCountrySearch(event: React.ChangeEvent<HTMLInputElement>) {
    setCountrySearch(event.target.value);
  }

  function handledepartureDateChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setDepartureDate(event.target.value);
  }

  function handlearrivalDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setArrivalDate(event.target.value);
  }

  function handlenumberOfTravelersChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setNumberOfTravelers(event.target.value);
  }

  function handleCountryClick(event) {
    setCountrySearch(event.target.innerText);
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  const filteredCountryData = countryData.filter((country) => {
    if (!countrySearch.trim().length) {
      return true;
    }
    return country.name
      .toLowerCase()
      .includes(countrySearch.trim().toLowerCase());
  });

  const countryList = filteredCountryData.map((country) => (
    <li
      key={country.name}
      className="cursor-pointer px-3 hover:bg-green"
      onClick={handleCountryClick}
    >
      {country.name}
    </li>
  ));

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTravel = {
      title,
      to: countrySearch,
      departureDate,
      arrivalDate,
      numberOfTravelers,
      userId,
    };

    const travelData = await dispatch(createTravel(newTravel));
    const travelId = travelData.payload.id;
    if (travelId) {
      navigate(`/voyages/${travelId}`);
    }
  }

  return (
    <form
      className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-6 justify-center items-center bg-white py-20 px-10 mx-10 shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="destination"
          className="block text-sm text-gray-700 uppercase font-bold dark:text-gray-300"
        >
          Destination
        </label>
        <input
          type="text"
          required
          placeholder="Destination"
          aria-label="Destination"
          className="block w-full self-start px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-green-200 focus:ring-opacity-40 dark:focus:border-green-200 focus:outline-none focus:ring"
          value={countrySearch}
          onChange={handleCountrySearch}
          ref={countryInput}
        />
        {countrySearch.length > 1 &&
          countryInput.current === document.activeElement && (
            <ul className="fixed bg-lightest border border-darkest z-10">
              {countryList}
            </ul>
          )}
      </div>
      <div>
        <label
          htmlFor="departuredate"
          className="block text-sm text-gray-700 uppercase font-bold dark:text-gray-300"
        >
          Date de départ
        </label>
        <input
          type="date"
          required
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-green-200 focus:ring-opacity-40 dark:focus:border-green-200 focus:outline-none focus:ring"
          value={departureDate}
          onChange={handledepartureDateChange}
        />
      </div>
      <div>
        <label
          htmlFor="arrivaldate"
          className="block text-sm text-gray-700 uppercase font-bold dark:text-gray-300"
        >
          Date de retour
        </label>
        <input
          type="date"
          required
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-green-200 focus:ring-opacity-40 dark:focus:border-green-200 focus:outline-none focus:ring"
          value={arrivalDate}
          onChange={handlearrivalDateChange}
        />
      </div>
      <div>
        <label
          htmlFor="nb-travelers"
          className="block text-sm text-gray-700 uppercase font-bold dark:text-gray-300"
        >
          Participants
        </label>
        <input
          type="number"
          required
          min="0"
          max="30"
          name="nb-travelers"
          placeholder="Nombre de participants"
          aria-label="Nombre de participants"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-green-200 focus:ring-opacity-40 dark:focus:border-green-200 focus:outline-none focus:ring"
          value={numberOfTravelers}
          onChange={handlenumberOfTravelersChange}
        />
      </div>
      <div>
        <label
          htmlFor="title"
          className="block text-sm text-gray-700 uppercase font-bold dark:text-gray-300"
        >
          Titre du voyage
        </label>
        <input
          type="text"
          required
          placeholder="Titre du voyage"
          aria-label="Titre du voyage"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-green-200 focus:ring-opacity-40 dark:focus:border-green-200 focus:outline-none focus:ring"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm font-bold uppercase text-white transition-colors duration-300 bg-green rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-700 focus:ring focus:ring-green-300 focus:ring-opacity-80"
      >
        Créer !
      </button>
    </form>
  );
}

export default TravelForm;
