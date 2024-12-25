import React, { createContext, useState } from 'react';

/**
 * TaskContext provides global state for task management.
 */
export const TaskContext = createContext();

/**
 * TaskProvider wraps components with TaskContext, managing task-related state and actions.
 */
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // State to manage tasks

  /**
   * Adds a new task to the task list.
   *
   * @param {object} task - The task to be added (id, text, completed, priority).
   */
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  /**
   * Removes a task from the task list by its ID.
   *
   * @param {number} id - The ID of the task to be removed.
   */
  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  /**
   * Toggles the completed state of a task.
   *
   * @param {number} id - The ID of the task to toggle.
   */
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  /**
   * Toggles the priority of a task between 'High' and 'Low'.
   *
   * @param {number} id - The ID of the task to toggle priority.
   */
  const togglePriority = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, priority: task.priority === 'High' ? 'Low' : 'High' } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, toggleComplete, togglePriority }}
    >
      {children}
    </TaskContext.Provider>
  );
};
