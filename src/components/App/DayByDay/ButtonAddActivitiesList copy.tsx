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
    <div className="container mx-auto p-4">
      <div className="card w-96 bg-lightest shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Nouvelle activité</h2>
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
      <div>
        {listItems.map((item, index) => (
          <div
            key={index}
            className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <h2 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {item.title}
            </h2>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {item.location}
            </p>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              ${item.price}participants
            </p>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Heure: {item.time}
            </p>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Date: {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddActivitiesTable;
