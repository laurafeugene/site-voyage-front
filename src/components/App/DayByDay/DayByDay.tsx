import RecapForm from "../GeneralTravel/RecapForm";
import NavDay from "../GeneralTravel/NavDay";   
import DayByDayMain from "./DayByDayMain";


function DayByDay() {   
    return (        
        <>
        <RecapForm arrivalDate="" budget="" departureDate="" title=""/>
        <NavDay />
        <DayByDayMain />
        </>
    );
}

export default DayByDay;