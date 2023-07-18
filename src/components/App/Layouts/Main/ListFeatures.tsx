function ListFeatures() {
  return (
    <section className=" dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
          Toutes nos fonctionnalités
        </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-orange rounded-full" />
          <span className="inline-block w-3 h-1 ml-1 bg-orange rounded-full" />
          <span className="inline-block w-1 h-1 ml-1 bg-orange rounded-full" />
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-300 rounded-xl dark:text-white dark:bg-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="grey-800"
                >
                  <path d="M482-500q32-38 47-79t15-91q0-50-16.467-91.842Q511.067-803.684 480-838q88-11 146 36.5T684-669q0 86.6-59 134.3Q566-487 482-500Zm227 378v-116q0-61-25.5-109T590-430q187 18 251 69.5t64 122.219V-122H709Zm120-346v-102.333H726v-59.334h103V-732h60v102.5h102v59.5H888.5v102H829Zm-520.204-26q-77.203 0-126-48.796Q134-591.593 134-668.796 134-746 182.796-795q48.797-49 126-49Q386-844 435-795t49 126.204q0 77.203-49 126Q386-494 308.796-494ZM-31-122v-121q0-42.095 21.633-76.543Q12.266-353.991 50-371q75-32 134.5-47T309-433q66 0 125 14.5T566-371q38 16 60.5 50.5t22.5 77.651V-122H-31Zm339.796-466Q344-588 366.5-610.846t22.5-58.119q0-35.685-22.513-58.36Q343.974-750 309.168-750q-35.218 0-58.193 22.721Q228-704.558 228-669.46q0 35.51 22.796 58.485 22.797 22.975 58 22.975ZM63-216h491v-23q0-15.353-8-28.824-8-13.47-25-21.176-65-29-110-39t-101.739-10q-56.738 0-103 10Q160-318 95.286-289.156 80-282.441 71.5-268.425 63-254.409 63-239v23Zm246-453Zm0 453Z" />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Invitez vos compagnons de voyage !
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Créez un compte et invitez vos amis et votre famille à vous
                rejoindre dans votre périple ! Chacun pourra participer ou non
                aux différentes activités programmées, savoir d'un coup d'oeil
                où dormir, prendre les repas et comment organiser son temps
                autour des activités programmées !
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-300 rounded-xl dark:text-white dark:bg-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="gray-800"
                >
                  <path d="M229-189h124v-258h254v258h124v-377L480-754 229-565.667V-189Zm-94 94v-518l345-259 346 259v518H524v-269h-88v269H135Zm345-377Z" />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Gérez votre voyage de chez vous
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Gérer l'intégralité de votre voyage depuis chez vous. Plannifiez
                votre destinations, vos étapes au cours de votre voyage, où vous
                passez vos nuits, où vous allez manger, programmez vos activités
                et les participants à ces activités.
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-300 rounded-xl dark:text-white dark:bg-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="gray-800"
                >
                  <path d="M639-492q23.45 0 40.225-16.5Q696-525 696-549t-16.886-40.5q-16.886-16.5-40.5-16.5T598-589.5Q581-573 581-549t17.062 40.5Q615.125-492 639-492Zm-352-91h232v-84H287v84ZM140-95q-36-120-71-239.532Q34-454.064 34-580q0-102 71.41-174 71.409-72 173.685-72H504q32.275-38 77.238-59Q626.2-906 676-906q34.667 0 59.833 24.667Q761-856.667 761-822q0 8-1.5 15t-3.5 14q-3 8-5.5 16.314Q748-768.371 746-759l73 73h107v324l-123 38-68 229H472v-80h-69v80H140Zm71.226-94H314v-80h246v80h103l62.612-208.862L831-431v-160h-52L651-719q1-24 6-47.5t12-47.5q-37 11-68.5 30.787T549-731H279q-63.529 0-107.264 43.736Q128-643.529 128-580q0 101.189 28 197.595Q184-286 211.226-189ZM480-502Z" />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Gérez votre Budget
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Gérez votre budget concernant votre voyage. Renseignez votre
                budget général et vous obtiendrez ce qu'il vous reste à
                dépenser. Vous pourrez aussi diviser votre budget par nombre de
                participants !
              </p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-green-500 bg-green-300 rounded-xl dark:text-white dark:bg-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="gray-800"
                >
                  <path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95H189Zm0-94h582v-582H189v582Zm34-79h515L578-488 446-317l-93-127-130 176Zm-34 79v-582 582Z" />
                </svg>
              </span>

              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Partagez vos souvenirs{' '}
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Partagez vos souvenirs en stockant vos plus belles photos de
                vacances sur notre applications !
              </p>
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-xl"
              src="/assets/slider-merbleue.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListFeatures;
