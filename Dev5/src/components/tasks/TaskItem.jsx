import React from 'react';
import PropTypes from 'prop-types';

/**
 * TaskItem component renders a single task with actions to complete, prioritize, or remove it.
 */
const TaskItem = ({ task, toggleComplete, togglePriority, removeTask }) => {
  return (
    <li className="flex justify-between items-center p-2 border border-gray-300 rounded-md">
      <span
        className={`flex-1 ${
          task.completed ? 'line-through text-gray-500' : 'text-black'
        }`}
      >
        {task.text} - <strong>{task.priority}</strong>
      </span>
      <div className="flex space-x-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => togglePriority(task.id)}
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          {task.priority === 'High' ? 'Set Low' : 'Set High'}
        </button>
        <button
          onClick={() => removeTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

// Prop Validation
TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  togglePriority: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default TaskItem;
