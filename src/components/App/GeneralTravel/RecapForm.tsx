function RecapForm() {
    return (
        <div className="flex md:flex-row w-full sm:flex-col">
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Mon Voyage (destination)</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Début du voyage :</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">Fin du voyage :</div>
                <div className="grid h-20 flex-grow card bg-lightest rounded-box place-items-center mx-2 my-2">
                <div className="avatar-group -space-x-6">
                    <div className="avatar">
                        <div className="w-12">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                        <img src="/https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
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
    );
}

export default RecapForm;