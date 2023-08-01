import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
import { updateTravel } from '../../store/reducers/travels';

function TableHistory() {
  const travels = useAppSelector((state) => state.travels.travels);
  const dispatch = useAppDispatch();

  const [editTravelId, setEditTravelId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    title: '',
    to: '',
    departureDate: '',
    arrivalDate: '',
    numberOfTravelers: '',
  });

  const handleEditClick = (event, travel) => {
    event.preventDefault();
    setEditTravelId(travel.id);

    const formValues = {
      title: travel.title,
      to: travel.to,
      departureDate: travel.departureDate,
      arrivalDate: travel.arrivalDate,
      numberOfTravelers: travel.numberOfTravelers,
    };
    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    // Getattribute() renvoie la valeur de l'attribut spécifié sur l'élément.
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleCancelClick = () => {
    setEditTravelId(null);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedTravel = {
      id: editTravelId,
      title: editFormData.title,
      to: editFormData.to,
      departureDate: editFormData.departureDate,
      arrivalDate: editFormData.arrivalDate,
      numberOfTravelers: editFormData.numberOfTravelers,
    };
    const newTravels = [...travels];
    const index = travels.findIndex((travel) => travel.id === editTravelId);

    newTravels[index] = editedTravel;
    dispatch(updateTravel(editTravelId, editedTravel));
    setEditTravelId(null);
  };

  return (
    <section className="container px-4 mx-auto my-6">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Historique de vos voyages
        </h2>
      </div>

      <div className="flex flex-col mt-6">
        <form onSubmit={handleEditFormSubmit}>
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                          />
                          <span>Voyages</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Destination</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date de départ
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date de fin
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Participants
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Modifier</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {travels &&
                      travels.map((travel) => (
                        <React.Fragment key={travel.id}>
                          {editTravelId === travel.id ? (
                            <EditableRow
                              editFormData={editFormData}
                              handleEditFormChange={handleEditFormChange}
                              handleCancelClick={handleCancelClick}
                            />
                          ) : (
                            <ReadOnlyRow
                              travel={travel}
                              key={travel.id}
                              handleEditClick={handleEditClick}
                            />
                          )}
                        </React.Fragment>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TableHistory;
