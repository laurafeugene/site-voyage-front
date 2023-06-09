function GeneralTravel() {


    return(
        <main>
            <div className="flex w-full">
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Mon Voyage (destination)</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Début du voyage :</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Fin du voyage :</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">
                <div className="avatar-group -space-x-6">
                    <div className="avatar">
                        <div className="w-12">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar placeholder">
                        <div className="w-12 bg-neutral-focus text-neutral-content">
                        <span>+99</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Budget</div>
            </div>  
        </main>
    );
}

export default GeneralTravel;