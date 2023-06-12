function NavDay () {
    return (
        <div>
            <div className="tabs bg-darkest tabs-boxed m-2">
                <div className="flex justify-start">
                    <a className="tab text-lightest hover:bg-lightest hover:text-darkest font-semibold m-1">Récapitulatif</a> 
                </div>

                <div className="flex justify-end">
                    <a className="tab text-lightest hover:bg-lightest hover:text-darkest font-semibold m-1">Jour 1</a> 
                    <a className="tab text-lightest hover:bg-lightest hover:text-darkest font-semibold m-1">Jour 2</a>
                </div>
            </div>
        </div>
    );
}

export default NavDay;