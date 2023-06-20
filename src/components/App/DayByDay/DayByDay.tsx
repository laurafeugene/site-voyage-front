import RecapForm from "../GeneralTravel/RecapForm";
import NavDay from "../GeneralTravel/NavDay";   
import DayByDayMain from "./DayByDayMain";
import { useEffect, useState } from "react";
import { RecapFormProps, getRecapForm } from "../../../store/reducers/dataForm";


function DayByDay() {   
    const [recapForm, setRecapForm] = useState<RecapFormProps>({
        arrivalDate: "",
        departureDate: "",
        budget: "",
        title: ""
    });

    useEffect(() => {
        getRecapForm(1).then((data) => {  // remplacer le 2 par l'id de l'url du voyage
            setRecapForm(data);
        });
    }, []);

    return (        
        <>
        <RecapForm arrivalDate={recapForm.arrivalDate} departureDate={recapForm.departureDate} budget={recapForm.budget} title={recapForm.title}/>
        <NavDay />
        <DayByDayMain />
        </>
    );
}

export default DayByDay;