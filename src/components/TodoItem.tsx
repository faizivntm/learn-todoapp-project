import type { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onToggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = ({ todo, onToggleCompleted, deleteTodo }: Props) => {
  const { id, text, completed } = todo;

  return (
    <div>
      <li
        className={`flex items-center justify-between p-4 rounded-lg shadow-md ${completed ? "bg-gray-200 line-through" : "bg-teal-200"}`}
      >
        <span
          onClick={() => {
            onToggleCompleted(id);
          }}
          className={`cursor-pointer ${completed ? "text-gray-600" : "text-gray-800"}`}
        >
          {text}
        </span>
        <button
          onClick={() => {
            deleteTodo(id);
          }}
          className="text-red-500 hover:text-red-600 transition-all cursor-pointer"
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
