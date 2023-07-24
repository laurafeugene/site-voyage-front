import { useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalDelete = ({ isOpen, onClose }: ModalProps) => {
  const handleDelete = () => {
    // Perform delete action here
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      <div className="absolute inset-0 blur-xl opacity-50" />
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Supprimer votre voyage</h2>
        <p className="mb-4">Êtes-vous sûr de vouloir supprimer ce voyage ??</p>
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-green bg-red-500 hover:bg-red-600 rounded"
            onClick={handleDelete}
          >
            Supprimer
          </button>
          <button
            type="button"
            className="px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded"
            onClick={handleCancel}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
