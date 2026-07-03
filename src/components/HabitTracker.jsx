import useLocalStorage from '../hooks/useLocalStorage'

const HABITS = ['Read', 'Exercise', 'Drink Water'] // fixed list 

function HabitTracker() {
  const [done, setDone] = useLocalStorage('sh_habits', [])  

  function toggleHabit(habit) {
    if (done.includes(habit)) {
      setDone(done.filter(h => h !== habit)) // if already done ,remove it
    } else {
      setDone([...done, habit]) // if not done ,add it
    }
  }

  return (
    <div className="dashboard-card">
      <div className="card-title">
        <h3>Habit Tracker</h3>
      </div>
      <ul id="habit-list">
        {HABITS.map(habit => ( // loop through each habit and render it
          <li key={habit} className={`task-item ${done.includes(habit) ? 'done' : ''}`}>
            <input
              type="checkbox"
              className="task-checkbox"
              checked={done.includes(habit)}  //checked if habit name is in done array
              onChange={() => toggleHabit(habit)}
            />
            <span className="task-label">{habit}</span>
          </li>
        ))}
      </ul>
      <button className="action-btn" style={{marginTop: '12px', fontSize: '0.8rem'}} onClick={() => setDone([])}>
        Reset
      </button> 
    </div>
  )
}

export default HabitTracker