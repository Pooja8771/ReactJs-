import React, { useReducer, useState } from 'react';

function MyTasks() {
  const [task, setTask] = useState('');
  const [tasks, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [...state, action.payload];
      case 'delete':
        return state.filter((_, index) => index !== action.payload);
      case 'clone':
        return [...state, state[action.payload]];
      default:
        return state;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch({ type: 'add', payload: task });
      setTask('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task details"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => dispatch({ type: 'delete', payload: index })}>
              Delete
            </button>
            <button onClick={() => dispatch({ type: 'clone', payload: index })}>
              Clone
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyTasks;
