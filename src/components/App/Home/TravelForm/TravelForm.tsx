import { ChangeEvent, useState } from 'react';

import { countryData } from './country-data';

function TravelForm() {
  const [countrySearch, setCountrySearch] = useState('');

  function handleCountrySearch(event: ChangeEvent<HTMLInputElement>) {
    setCountrySearch(event.target.value);
  }

  const filteredCountryData = countryData.filter((country) => {
    if (!countrySearch.trim().length) {
      return true;
    }

    return country.name.common.toLowerCase().includes(countrySearch.trim().toLowerCase());
  });

  const countryList = filteredCountryData.map((country) => (
    <li 
      key={country.name.common} 
      className="cursor-pointer px-3 hover:bg-warm"
      onClick={handleCountryClick}
    >
      {country.name.common}
    </li>
  ));

  function handleCountryClick(event) {
    // Au clic, je rajoute le pays sélectionné à la liste des pays du voyage et je ferme l'autocompletion
  };

  return (
    <form className="flex flex-col justify-center items-center bg-medium py-5">
      <legend className="p-5 text-lg">Préparez votre voyage dès maintenant !</legend>
      <div>
        <input
          type="text"
          placeholder="Destination"
          aria-label="Destination"
          className="input input-bordered mr-2"
          onChange={handleCountrySearch}
        />
        <ul className="fixed bg-lightest border border-darkest">
          {countrySearch.length > 1 && countryList}
        </ul>
        <input
          type="date"
          name="trip-start"
          className="input input-bordered mr-2"
        />
        <input
          type="date"
          name="trip-end"
          className="input input-bordered mr-2"
        />
        <input
          type="number"
          min="0"
          max="30"
          name="nb-travelers"
          placeholder="Nombre de participants"
          aria-label="Nombre de participants"
          className="input input-bordered mr-2 w-60"
        />
        <button type="submit" className="btn ml-2">
          Créer
        </button>
      </div>
    </form>
  );
}

export default TravelForm;
