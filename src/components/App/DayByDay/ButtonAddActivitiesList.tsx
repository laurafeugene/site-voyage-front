import { useState } from "react";

type ListItem = {
  title: string;
  location: string;
  price: number;
  members: number;
  time: string;
  date: string;
};

function AddActivitiesTable() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [members, setMembers] = useState(0);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
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
    setTitle("");
    setLocation("");
    setPrice(0);
    setMembers(0);
    setTime("");
    setDate("");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="card w-96 bg-lightest shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Une nouvelle activité ?</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 mb-2">
                Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="members" className="block text-gray-700 mb-2">
            Members
          </label>
          <input
            type="number"
            id="members"
            value={members}
            onChange={(e) => setMembers(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 mb-2">
            Time
          </label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 mb-2">
            Date
          </label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="btn btn-darkest bg-darkest text-lightest w-full hover:bg-lightest hover:text-darkest"
        >
          Create
        </button>
      </form>
        </div>
      </div>
      <div>
        {listItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded p-4 mb-4"
          >
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-2">{item.location}</p>
            <p className="text-gray-700 mb-2">${item.price}</p>
            <p className="text-gray-700 mb-2">{item.members} members</p>
            <p className="text-gray-700 mb-2">Time: {item.time}</p>
            <p className="text-gray-700 mb-2">Date: {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddActivitiesTable;
