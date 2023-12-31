import { useEffect } from 'react';
import { Travel } from '../../@types/travelers';
import Title from '../TravelForm/Title';
import TravelForm from '../TravelForm/TravelForm';
import TableHistory from './History';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllTravels } from '../../store/reducers/travels';

function TravelsHistory() {
  const dispatch = useAppDispatch();
  const travels = useAppSelector((state) => state.travels.travels);

  useEffect(() => {
    dispatch(getAllTravels());
  }, [dispatch]);

  const organizerFirstName =
    travels.length > 0 ? travels[0].organizer.firstname : '';

  return (
    <div className="overflow-hidden">
      <Title
        text={`Hello ${organizerFirstName}, envie de partir en vacances ?`}
      />
      <TravelForm />
      <TableHistory />
    </div>
  );
}

export default TravelsHistory;
