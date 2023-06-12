function DayByDayMain() {
    return(
        <div className="flex md:flex-col w-full sm:flex-col">

             {/* contenant le budget du voyage */}
                
             <div className="flex flex-1 flex-col md:w-1/3 sm:w-full m-2"> 
                    <div className="grid h-20 card bg-lightest-400 rounded-box place-items-center m-1">Budget avec décompte</div>
                </div>

             
             {/* contenant les activités du jour et les prochaines destinationsctivités du jour et étapes du voyage ce jour */}

             <div className="flex md:flex-col md:w-1/2">
                {/* activités du jour */}

                <div className="flex flex-col w-full border-opacity-50 m-1">
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center m-1">content</div>
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center m-1">content</div>

                    <div className="">
                    <button className="btn btn-primary">Ajouter une activité</button>
                    </div>
                </div>

                {/* Prochaines destinations*/}

                <div className="flex flex-col w-full border-opacity-50 m-1">
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center m-1">content</div>
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center m-1">content</div>

                    <div className="">
                    <button className="btn btn-primary">Ajouter une étape</button>
                    </div>

                </div>
            </div>
        

            
               
                {/* carrousel des photos souvenirs du voyage */}

            <div className="flex flex-wrap justify-center item center">
                <div className="carousel max-w-xl my-2">{/* carrousel d'image pour les photos du voyage à modifier pour chercher les images de la base donnée et ajouter une fonction pour que si pas de photo, afficher un message "Ajoutez vos souvenirs de voyage" */}
                    <div id="item1" className="carousel-item w-full">
                        <img src="../src/assets/foxtail-grass-g143d33576_1280.jpg" className="w-full object-contain" />
                    </div> 
                    <div id="item2" className="carousel-item w-full">
                        <img src="../src/assets/butterfly-g87b0c801f_1280.jpg" className="w-full object-contain" />
                    </div> 
                </div> 

                
                <div className="flex justify-center w-full py-2 gap-2 m-2">
                    <a href="#item1" className="btn btn-xs bg-darkest text-lightest font-semibold hover:bg-lightest hover:text-darkest">1</a> 
                    <a href="#item2" className="btn btn-xs bg-darkest text-lightest font-semibold hover:bg-lightest hover:text-darkest">2</a> 
                </div>

                {/* bouton ajoutez des photos souvenirs */}

                <div className="form-control w-full max-w-xs m-2">
                <input type="file" className="file-input file-input-bordered file-input-darkest file-input-sm w-full max-w-xs" />
                </div> 
            </div>

        </div>
    );
}

export default DayByDayMain;



