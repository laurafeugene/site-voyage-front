import RecapForm from "./RecapForm";
import { RecapFormProps, getRecapForm } from "../../../store/reducers/dataForm";
import NavDay from "./NavDay";
import GeneralTravelMain from "./GeneralTravelMain";
import { useEffect, useState} from "react";
import dayjs from "dayjs";


function GeneralTravel() {
  const [recapForm, setRecapForm] = useState<RecapFormProps>({
    arrivalDate: '',
    departureDate: '',
    budget: '',
    title: '',
  });
    const [numberOfDays, setNumberOfDays] = useState<number>(0);


    useEffect(() => {
        getRecapForm(1).then((data) => {  // remplacer le 2 par l'id de l'url du voyage
            setRecapForm(data);
        });
    }, []);

    useEffect(() => {
        if (recapForm.arrivalDate && recapForm.departureDate) {
            const arrivalDay = dayjs(recapForm.arrivalDate);
            const departureDay = dayjs(recapForm.departureDate);
            const duration = Math.abs(departureDay.diff(arrivalDay, 'day')); // Utilisation de Math.abs() pour obtenir la valeur absolue
            console.log("Nombre de jours entre les dates : ", duration);
            setNumberOfDays(duration);
        }
    }, [recapForm]);
    

    

    return(
        <>
        <RecapForm arrivalDate={recapForm.arrivalDate} departureDate={recapForm.departureDate} budget={recapForm.budget} title={recapForm.title}/> 
        <NavDay numberOfDays={numberOfDays} />
        <GeneralTravelMain />
        </>
    );

}

export default GeneralTravel;
