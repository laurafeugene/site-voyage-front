const EditableRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          placeholder="Modifier le titre"
          name="title"
        />
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Modifier la destination"
          name="destination"
        />
      </td>
      <td>
        <input
          type="date"
          required
          placeholder="Modifier la date de départ"
          name="departuredate"
        />
      </td>
      <td>
        <input
          type="date"
          required
          placeholder="Modifier la date de fin"
          name="arrivaldate"
        />
      </td>
      <td>
        <input
          type="number"
          required
          placeholder="Modifier les participants"
          name="nb-travelers"
        />
      </td>
    </tr>
  );
};

export default EditableRow;
