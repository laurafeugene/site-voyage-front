

function NavDay({ numberOfDays }: { numberOfDays: number }){
    return (
        <div>
            <div className="tabs bg-darkest tabs-boxed m-2 flex justify-between">
                <div className="flex justify-start">
                    <nav className="tab text-lightest hover:bg-lightest hover:text-darkest font-semibold m-1">Récapitulatif</nav> 
                </div>

                <nav className="flex justify-end">
          {Array.from({ length: numberOfDays }, (_, index) => (
            <nav
              key={index + 1}
              className="tab text-lightest hover:bg-lightest hover:text-darkest font-semibold m-1"
            >
              Jour {index + 1}
            </nav>
          ))}
        </nav>
            </div>
        </div>
    );
}

export default NavDay;