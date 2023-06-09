function GeneralTravel() {
    return(
        <main>
            <div className="flex w-full">
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Mon Voyage (destination)</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Début du voyage :</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Fin du voyage :</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Participants</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Budget</div>
            </div>  
        </main>
    );
}

export default GeneralTravel;