import { useState, type ChangeEvent } from "react";

type Props = {
  addTodo: (text: string) => void;
};

const TodoInput = ({ addTodo }: Props) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event?.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="mb-4 flex">
      <input
        value={newTodo}
        type="text"
        className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleAddTodo}
        className="px-6 py-2 bg-teal-500 rounded-r-lg text-white hover:bg-teal-700 transition-all cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
