import { useState, useEffct } from "react";
import { getTodos } from '../services/todoService';

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const todosData = await getTodos();
      setTodos(todosData);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAddTodo = async (newTodo: Omit<Todo, 'id' | 'isComplete'>) => {
    try {
      const addedTodo = await addTodo({ ...newTodo, isComplete: false });
      setTodos([...todos, addedTodo]);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <>
      <div className="h-150 w-screen p-3 bg-red-800 text-bold m-5 ">TODO!!</div>
      {error && <p classname="text-red-500 mb-4">{error}</p>}
      <TodoForm onAddTodo={handleAddTodo}/>
      <TodoList todos={todos}/>
    </>
  );
}

export default App;
