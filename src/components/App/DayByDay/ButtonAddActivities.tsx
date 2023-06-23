import { useState } from 'react';

type Category = 'repas' | 'hébergement' | 'trajet' | 'activité';

type Todo = {
  id: number;
  activity: string;
  category: Category;
};

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newActivity, setNewActivity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('repas');

  const handleAddActivity = () => {
    if (newActivity.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        activity: newActivity,
        category: selectedCategory,
      };
      setTodoList([...todoList, newTodo]);
      setNewActivity('');
    }
  };

  const handleRenameActivity = (id: number, newName: string) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, activity: newName } : todo
    );
    setTodoList(updatedTodoList);
  };

  const handleCategoryChange = (id: number, newCategory: Category) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, category: newCategory } : todo
    );
    setTodoList(updatedTodoList);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="card w-96 bg-lightest shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Une nouvelle activité ?</h2>
          <div className="mb-4">
            <input
              type="text"
              className="border border-darkest-300 rounded px-2 py-1 w-full"
              placeholder="Ajouter une activité"
              value={newActivity}
              onChange={(e) => setNewActivity(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <select
              className="border border-darkest-300 rounded px-2 py-1 w-full"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Category)}
            >
              <option value="repas">Repas</option>
              <option value="hébergement">Hébergement</option>
              <option value="trajet">Trajet</option>
              <option value="activité">Activité</option>
            </select>
          </div>
          <button
            type="button"
            className="btn btn-darkest bg-darkest text-lightest w-full hover:bg-lightest hover:text-darkest"
            onClick={handleAddActivity}
          >
            Ajouter
          </button>
        </div>
      </div>
      <div className="card w-96">
        {todoList.map((todo) => (
          <div
            key={todo.id}
            className={`card-body rounded-md my-3 mx-3 ${
              todo.category === 'repas'
                ? 'bg-darkest'
                : todo.category === 'hébergement'
                ? 'bg-warm'
                : todo.category === 'trajet'
                ? 'bg-medium'
                : todo.category === 'activité'
                ? 'bg-cool'
                : ''
            }`}
          >
            <input
              type="text"
              className="border border-darkest-300 rounded px-2 py-1 w-full"
              value={todo.activity}
              onChange={(e) => handleRenameActivity(todo.id, e.target.value)}
            />
            <select
              className="border border-darkest-300 rounded px-2 py-1 w-full mt-2"
              value={todo.category}
              onChange={(e) =>
                handleCategoryChange(todo.id, e.target.value as Category)
              }
            >
              <option value="repas">Repas</option>
              <option value="hébergement">Hébergement</option>
              <option value="trajet">Trajet</option>
              <option value="activité">Activité</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
