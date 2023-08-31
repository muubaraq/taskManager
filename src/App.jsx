import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/task'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', dueDate: '' });

  const handleAddTask = () => {
    if (newTask.name && newTask.dueDate) {
      const newTaskList = [...tasks, { ...newTask, id: tasks.length + 1 }];
      setTasks(newTaskList);
      setNewTask({ name: '', dueDate: '' });
    }
  };
  
 const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
     <section>
      <div className="App">
      <h1>Task⚙️ Manager</h1>
      <div className="form">
        <div className="inputBx">
	  <p>Task Name</p>
	  <input
          type="text"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
       </div>
       <div className="inputBx">
	  <p> Due Date</p>
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
	</div>
        <button className="btn"  onClick={handleAddTask}>Add Task</button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks to display🙅 </p>
      ) : (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={handleDeleteTask} />
        ))
      )}
    </div>
    </section>
    </>
  )
}

export default App
