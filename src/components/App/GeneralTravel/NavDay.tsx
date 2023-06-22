import { NavLink } from "react-router-dom";

function NavDay({ numberOfDays }: { numberOfDays: number }){
    return (
        <div>
            <div className="tabs bg-darkest tabs-boxed m-2 flex justify-between">
                <div className="flex justify-start">
                    <NavLink to="/voyages/:voyage" className="tab text-lightest hover:bg-lightest hover:text-darkest font-semibold m-1">Récapitulatif</NavLink> 
                </div>

                {/* affichage des liens de chaque jour */}

                <nav className="flex justify-end ">
                  {Array.from({ length: numberOfDays }, (_, index) => (
                    <NavLink
                      to={`/voyages/:voyage/jour/${index + 1}`}
                      key={index + 1}
                      className="tab text-lightest hover:bg-lightest hover:text-darkest font-semibold m-1 flex-shrink-0 "
                    >
                      Jour {index + 1}
                    </NavLink>
                    ))}
                  </nav>
                  
            </div>
        </div>
    );
}

export default NavDay;