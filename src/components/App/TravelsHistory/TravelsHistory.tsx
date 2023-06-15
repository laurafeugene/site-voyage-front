function TravelsHistory() {
  return (
    <div className="flex flex-col space-y-10 w-full m-6 items-center">
      <div className="w-2/3 card lg:card-side bg-lightest-300 shadow-xl">
        <figure>
          <img
            src="src/assets/eva-darron-oCdVtGFeDC0-unsplash.jpg"
            alt="Album"
            className="object-cover w-full max-h-64"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Titre du voyage</h2>
          <ol>
            <li>Date</li>
            <li>Pays </li>
            <li>Participants</li>
          </ol>
          <div className="card-actions justify-end">
            <button className="btn bg-darkest text-lightest">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}

export default TravelsHistory;
