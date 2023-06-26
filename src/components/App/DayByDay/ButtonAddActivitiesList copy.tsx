import { useState } from 'react';

type ListItem = {
  title: string;
  location: string;
  price: number;
  members: number;
  time: string;
  date: string;
};

function AddActivitiesTable() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [members, setMembers] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [listItems, setListItems] = useState<ListItem[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: ListItem = {
      title,
      location,
      price,
      members,
      time,
      date,
    };

    setListItems([...listItems, newItem]);
    setTitle('');
    setLocation('');
    setPrice('');
    setMembers('');
    setTime('');
    setDate('');
  };

  return (
    <div className="container p-4 flex flex-col w-full lg:flex-row">
      <div className="card bg-lightest shadow-xl place-items-center">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-4">
              <input
                type="text"
                required
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Titre de l'activité"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                required
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border border-darkest-300 rounded-md"
                placeholder="Lieu"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                id="members"
                value={members}
                onChange={(e) => setMembers(Number(e.target.value))}
                className="w-full p-2 border border-darkest-300 rounded-md"
                placeholder="Nombre de participants"
              />
            </div>
            <div className="mb-4">
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-2 border border-darkest-300 rounded-md"
                placeholder="Heure"
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border border-darkest-300 rounded-md"
                placeholder="Date"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full p-2 border border-darkest-300 rounded-md"
                placeholder="Prix"
              />
            </div>
            <button
              type="submit"
              className="btn btn-darkest bg-darkest text-lightest w-full hover:bg-lightest hover:text-darkest"
            >
              Ajouter une activité
            </button>
          </form>
        </div>
      </div>
      <div className="divider lg:divider-horizontal" />
      <ol className="flex flex-wrap">
        {/* <h3 className="mb-6 ml-3 text-2xl font-bold text-darkest-700 dark:text-darkest-300">
          Aujourd'hui, vous avez prévu : {listItems.length} activités
        </h3> */}
        {listItems.map((item, index) => (
          <li key={index} className="card">
            <div className="p-4 w-full lg:flex-row">
              <div className="container card p-4 bg-lightest shadow-xl place-items-center">
                <div className="card-body">
                  <p className="text-xl text-darkest hover:text-lightest-600 focus:text-lightest-600 active:text-lightest-700">
                    {item.title}
                  </p>
                </div>
                <p className="mb-6 text-darkest-700 darkest:text-darkest-200">
                  {item.members} participants
                </p>
                <p className="mb-6 text-darkest-700 darkest:text-darkest-200">
                  {item.location}
                </p>
                <p className="mb-6 text-darkest-700 darkest:text-darkest-200">
                  Date : {item.date}
                </p>
                <p className="mb-6 text-darkest-700 darkest:text-darkest-200">
                  Heure : {item.time}
                </p>
                <p className="mb-6 text-darkest-700 darkest:text-darkest-200">
                  {item.price} €
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-lightest px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-lightest-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-lightest-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-lightest-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] darkest:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] darkest:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] darkest:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] darkest:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="bg-light"
                >
                  Modifier
                </button>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AddActivitiesTable;
