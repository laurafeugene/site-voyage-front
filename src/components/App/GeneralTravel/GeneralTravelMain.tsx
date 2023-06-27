function GeneralTravelMain() {
  return (
    <div className="flex w-full sm:flex-col space-x-1">
      <div className="flex md:flex-row w-full sm:flex-col">
        {/* contenant les activités du voyage */}

        <div className="flex flex-1 flex-col md:w-1/3 sm:w-full m-2">
          {' '}
          {/* récupérer les données de la base de données  pour faire le nombre de bulles relatives au activités dans l'ordre d'arrivée */}
          <div className="grid h-20 card bg-lightest-400 rounded-box place-items-center m-1">
            Ski
          </div>
          <div className="grid h-20 card bg-lightest-400 rounded-box place-items-center m-1">
            patin à glace
          </div>
        </div>

        {/* contenant le budget du voyage */}
        {/* 
                <div className="flex flex-1 flex-col md:w-1/3 sm:w-full m-2"> 
                    <div className="grid h-20 card bg-lightest-400 rounded-box place-items-center m-1">Budget avec décompte</div>
                </div>
 */}

        {/* contenant les prochaines étapes du voyage */}

        <div className="flex flex-1 flex-col md:w-1/3 sm:w-full m-2">
          {' '}
          {/* récupérer les données de la base de données  pour faire le nombre de bulles relatives aux prochaines étapes (itinéraires) du voyage */}
          <div className="grid h-20 card bg-lightest-400 rounded-box place-items-center m-1">
            Alpes
          </div>
          <div className="grid h-20 card bg-lightest-400 rounded-box place-items-center m-1">
            Genève
          </div>
        </div>
      </div>

      {/* carrousel des photos souvenirs du voyage */}

      {/* contenant le budget du voyage */}

      <div className="flex flex-1 flex-col md:w-1/3 sm:w-full m-2">
        <div className="grid h-20 card bg-lightest-400 rounded-box place-items-center m-1">
          Budget avec décompte
        </div>
      </div>

      {/* contenant les prochaines étapes du voyage */}

      <div className="flex flex-1 flex-col md:w-1/3 sm:w-full m-2">
        {' '}
        {/* récupérer les données de la base de données  pour faire le nombre de bulles relatives aux prochaines étapes (itinéraires) du voyage */}
        <div className="grid h-20 card bg-lightest-400 rounded-box place-items-center m-1">
          Alpes
        </div>
        <div className="grid h-20 card bg-lightest-400 rounded-box place-items-center m-1">
          Genève
        </div>
      </div>
    </div>
  );
}

export default GeneralTravelMain;
