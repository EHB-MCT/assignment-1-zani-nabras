import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

/**
 * TodoPage component renders the main interface of the Todo App.
 * It allows users to add, complete, prioritize, and remove tasks, with filtering functionality.
 */
const TodoPage = () => {
  const { tasks, addTask, removeTask, toggleComplete, togglePriority } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all'); // State to manage filter: 'all', 'completed', 'incomplete', 'high', 'low'

  /**
   * Handles the addition of a new task.
   * Prevents empty input submissions.
   */
  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask({ id: Date.now(), text: newTask, completed: false, priority: 'Low' });
      setNewTask('');
    }
  };

  /**
   * Filters tasks based on the selected filter state.
   */
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    if (filter === 'high') return task.priority === 'High';
    if (filter === 'low') return task.priority === 'Low';
    return true; // 'all'
  });

  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl w-full">
      {/* Input and Add Button */}
      <div className="flex w-full max-w-2xl mb-8">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow p-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
          placeholder="What do you want to do?"
          aria-label="Enter a new task"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-6 rounded-r-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          Add
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-8">
        {['all', 'completed', 'incomplete', 'high', 'low'].map((filterOption) => (
          <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`px-6 py-2 rounded-full ${
              filter === filterOption
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700'
            } hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none`}
          >
            {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
          </button>
        ))}
      </div>

      {/* Task List */}
      <ul className="w-full max-w-2xl space-y-4">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-4 bg-white border rounded-lg shadow-md ${
              task.completed ? 'opacity-75 line-through' : ''
            }`}
          >
            <span className={`text-lg ${task.priority === 'High' ? 'text-red-500' : 'text-gray-800'}`}>
              {task.text} - <strong>{task.priority}</strong>
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => toggleComplete(task.id)}
                className={`px-4 py-2 rounded-full ${
                  task.completed
                    ? 'bg-green-500 text-white hover:bg-green-400'
                    : 'bg-gray-300 text-gray-700 hover:bg-green-500 hover:text-white'
                }`}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => togglePriority(task.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                {task.priority === 'High' ? 'Set Low' : 'Set High'}
              </button>
              <button
                onClick={() => removeTask(task.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <footer className="mt-8 text-gray-500">
        Made with ❤️ by <strong>Zani & Nabras</strong>
      </footer>
    </div>
  );
};

export default TodoPage;
