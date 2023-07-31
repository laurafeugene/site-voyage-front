const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          // required
          placeholder="Modifier le titre"
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          // required
          placeholder="Modifier la destination"
          name="destination"
          value={editFormData.to}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="date"
          // required
          placeholder="Modifier la date de départ"
          name="departuredate"
          value={editFormData.departureDate}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="date"
          // required
          placeholder="Modifier la date de fin"
          name="arrivaldate"
          value={editFormData.arrivalDate}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="number"
          // required
          placeholder="Modifier les participants"
          name="nb-travelers"
          value={editFormData.numberOfTravelers}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Sauvegarder</button>
        <button type="button" onClick={handleCancelClick}>
          Annuler
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
