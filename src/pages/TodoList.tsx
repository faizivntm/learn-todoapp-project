import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import type { Todo } from "../types/todo";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: string) => {
    const todo: Todo = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };

    setTodos((prev) => [...prev, todo]);
  };

  const handleToggleCompleted = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to to-teal-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Todo List
        </h1>
        <TodoInput addTodo={addTodo} />
        <ul className="space-y-4">
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleCompleted={handleToggleCompleted}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
