function TravelForm() {
  return (
    <form>
      <legend>Créez votre voyage</legend>
      <input type="text" placeholder="Pays" aria-label="Pays" />
      <input type="date" name="trip-start" />
      <input type="date" name="trip-end" />
      <input
        type="number"
        placeholder="Nombre de participants"
        aria-label="Nombre de participants"
      />
      <button type="submit">Créer</button>
    </form>
  );
}

export default TravelForm;
