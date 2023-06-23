import { useEffect, useState } from 'react';
import Tagline from '../TravelForm/Tagline';
import TravelForm from '../TravelForm/TravelForm';
import History from './History';
import { Travel, getAllTravels } from '../../../store/reducers/travels';
import { useAppDispatch } from '../../../hooks/redux';

function TravelsHistory() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTravels());
  }, [dispatch]);

  return (
    <>
      <Tagline text="Envie de partir de nouveau en voyage ?" />
      <TravelForm />
      <History />
    </>
  );
}

export default TravelsHistory;
