function Banner() {
  return (
    <section className=" dark:bg-gray">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-950 xl:text-3xl dark:text-white">
          Organisez vos voyages entre amis en quelques clics !
        </h2>

        <p className="block max-w-4xl mt-4 text-gray-600 font-medium dark:text-gray-300">
          Plateforme collaborative pour organiser vos voyages en groupe.
        </p>

        <div className="my-16">
          <a
            href="/"
            className="box-content h-18 inline-flex items-center justify-center px-8 py-4 overflow-hidden text-sm font-bold text-white transition-colors duration-300 bg-green rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-700 focus:ring focus:ring-green-300 focus:ring-opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
              fill="white"
            >
              <path d="m263-263 290-143 143-290-290 143-143 290Zm217-177q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
            </svg>

            <span className="mx-2">Planifiez votre voyage !</span>
          </a>

          <a
            href="/travels"
            className="box-content h-18 inline-flex items-center justify-center px-8 py-4 mt-4 overflow-hidden text-sm bg-white text-green font-bold transition-colors duration-300 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-green focus:ring focus:ring-green-300 focus:ring-opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="30"
              fill="#20b970"
            >
              <path d="M377-198v-60h463v60H377Zm0-252v-60h463v60H377Zm0-253v-60h463v60H377ZM189-161q-28.05 0-48.025-19Q121-199 121-227.5t19.5-48q19.5-19.5 48-19.5t47.5 19.975Q255-255.05 255-227q0 27.225-19.387 46.613Q216.225-161 189-161Zm0-252q-28.05 0-48.025-19.681Q121-452.362 121-480t19.975-47.319Q160.95-547 189-547q27.225 0 46.613 19.681Q255-507.638 255-480t-19.387 47.319Q216.225-413 189-413Zm-1-253q-27.637 0-47.319-19.681Q121-705.362 121-733t19.681-47.319Q160.363-800 188-800q27.637 0 47.319 19.681Q255-760.638 255-733t-19.681 47.319Q215.637-666 188-666Z" />
            </svg>

            <span className="mx-2">Voir vos voyages</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
