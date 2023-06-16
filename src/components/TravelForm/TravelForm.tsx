import { ChangeEvent, useRef, useState } from 'react';

import countryData from '../../data/countryData';

function TravelForm() {
  const [countrySearch, setCountrySearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [nbTravelers, setNbTravelers] = useState(0);

  const countryInput = useRef(null);

  function handleCountrySearch(event: React.ChangeEvent<HTMLInputElement>) {
    setCountrySearch(event.target.value);
  }

  function handleStartDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStartDate(event.target.value);
  }

  function handleEndDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEndDate(event.target.value);
  }

  function handleNbTravelersChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNbTravelers(event.target.value);
  }

  function handleCountryClick(event) {
    setCountrySearch(event.target.innerText);
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
      className="cursor-pointer px-3 hover:bg-warm"
      onClick={handleCountryClick}
    >
      {country.name}
    </li>
  ));

  return (
    <form className="flex flex-col justify-center items-center bg-medium py-8">
      <div>
        <input
          type="text"
          required
          placeholder="Destination"
          aria-label="Destination"
          className="input input-bordered mr-2"
          value={countrySearch}
          onChange={handleCountrySearch}
          ref={countryInput}
        />
        {countrySearch.length > 1 &&
          countryInput.current === document.activeElement && (
            <ul className="fixed bg-lightest border border-darkest">
              {countryList}
            </ul>
          )}
        <input
          type="date"
          required
          className="input input-bordered mr-2"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <input
          type="date"
          required
          className="input input-bordered mr-2"
          value={endDate}
          onChange={handleEndDateChange}
        />
        <input
          type="number"
          required
          min="0"
          max="30"
          name="nb-travelers"
          placeholder="Nombre de participants"
          aria-label="Nombre de participants"
          className="input input-bordered mr-2 w-60"
          value={nbTravelers}
          onChange={handleNbTravelersChange}
        />
        <button type="submit" className="btn ml-2">
          Créer
        </button>
      </div>
    </form>
  );
}

export default TravelForm;
