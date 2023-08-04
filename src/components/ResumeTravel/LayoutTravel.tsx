import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Title from '../TravelForm/Title';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getTravelById } from '../../store/reducers/travels';

function LayoutTravel() {
  const dispatch = useAppDispatch();
  const travels = useAppSelector((state) => state.travels.travels);
  const voyageId = Number(useParams().voyage);
  const [travel, setTravel] = useState();

  const travelDestination = travels.find(
    (travel) => travel.id === voyageId
  )?.to;

  useEffect(() => {
    getTravelById(voyageId).then((data) => {
      dispatch(data);
      setTravel(data);
    });
  }, [dispatch, voyageId]);

  return (
    <>
      <Title text={`Votre prochaine destination : ${travelDestination} !`} />
    </>
  );
}

export default LayoutTravel;
