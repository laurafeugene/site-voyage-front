import { useEffect } from 'react';
import Tagline from '../TravelForm/Tagline';
import TravelForm from '../TravelForm/TravelForm';
import TableHistory from './History';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllTravels } from '../../store/reducers/travels';

function TravelsHistory(travelers) {
  const dispatch = useAppDispatch();
  const travels = useAppSelector((state) => state.travels.travels);

  useEffect(() => {
    dispatch(getAllTravels());
  }, [dispatch]);

  const organizerFirstName =
    travels.length > 0 ? travels[0].organizer.firstname : '';

  return (
    <div className="overflow-hidden">
      <Tagline
        text={`Hello ${organizerFirstName}, envie de partir en vacances ?`}
      />
      <TravelForm />
      <TableHistory />
    </div>
  );
}

export default TravelsHistory;
