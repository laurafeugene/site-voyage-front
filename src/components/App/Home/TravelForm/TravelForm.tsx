function TravelForm() {
  return (
    <form className="flex flex-col justify-center items-center bg-lightest py-5">
      <legend className="p-5">Préparez votre voyage dès maintenant !</legend>
      <div>
        <input type="text" placeholder="Pays" aria-label="Pays" className="input input-bordered ml-2" />
        <input type="date" name="trip-start" className="input input-bordered ml-2" />
        <input type="date" name="trip-end" className="input input-bordered ml-2" />
        <input
          type="number"
          min="0"
          max="30"
          name="nb-travelers"
          placeholder="Nombre de participants"
          aria-label="Nombre de participants"
          className="input input-bordered ml-2 w-60"
        />
        <button type="submit" className="btn ml-2">Créer</button>
      </div>
    </form>
  );
}

export default TravelForm;
