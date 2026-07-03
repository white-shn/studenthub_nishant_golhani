import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('sh_tasks', [])
  const [input, setInput] = useState('')

  function addTask() {
    if (!input.trim()) return
    setTasks([...tasks, {id:Date.now(),text:input.trim(),done:false}]) // spread the old tasks array nd add the new one 
    setInput('') // clear input after adding task 
  }

  function toggleTask(id) {
    setTasks(tasks.map(t => t.id=== id ? {...t, done: !t.done}:t)) 
  } //we go through all the tasks nd if it's done , we'll flip it

  function deleteTask(id) {
    setTasks(tasks.filter(t =>t.id!==id))
  }

  return (
    <div className="dashboard-card">
      <div className="card-title">
        <h3>Task Manager</h3>
      </div>
      <div className="task-input-row">
        <input
          type="text"
          className="text-input"
          placeholder="Add a new task"
          value={input}
          onChange={(e) =>setInput(e.target.value)}
          onKeyDown={(e) =>e.key==='Enter' && addTask()}
        />
        <button className="action-btn" onClick={addTask}>Add</button>
      </div>
      <ul id="task-list">
        {tasks.map(task =>(
          <li key={task.id} className={`task-item ${task.done ? 'done':''}`}>
            <input
              type="checkbox"
              className="task-checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span className="task-label">{task.text}</span>
            <button className="task-delete-btn" onClick={() => deleteTask(task.id)}>✕</button>
          </li>
        ))}
      </ul>
      {tasks.length===0 && <p className="empty-msg">No tasks yet.</p>}
    </div>
  )
}

export default TaskManager