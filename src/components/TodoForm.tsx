import React, { useState } from 'react';
import { addTodo } from '../services/todoService';
import { Todo } from '../types';

interface TodoFormProps {
  onAddTodo: (newTodo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [task, setTask] = useState<string>('');

  const handleAddTodo = async () => {
    try {
      const newTodo: Todo = await addTodo({
        task,
        isComplete: false,
      });
      onAddTodo(newTodo);
      setTask('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="border rounded py-2 px-3 mr-2"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTodo}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoForm;