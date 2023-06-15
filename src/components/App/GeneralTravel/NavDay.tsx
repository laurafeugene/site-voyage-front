// const date1: Date = new Date( "2021-03-01");
// const date2: Date = new Date( "2021-03-02");

// function dayDiff(day1: Date, Day2: Date): number {
//   return Math.round((day1.getTime()-Day2.getTime())/(1000*60*60*24)); 
// };
// console.log(dayDiff(date1, date2));



function NavDay () {
    return (
        <div>
            <div className="tabs bg-darkest tabs-boxed m-2 flex justify-between">
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