import TaskManager from '../components/TaskManager'
import HabitTracker from '../components/HabitTracker'

//  holds the two widget components side by side
function Dashboard() {
  return (
    <section id="dashboard">
      <div className="dashboard-inner">
        <div className="dashboard-header">
          <h2 className="dashboard-heading">Dashboard</h2>
        </div>
        <div className="dashboard-grid">
          <TaskManager />
          <HabitTracker />
        </div>
      </div>
    </section>
  )
}

export default Dashboard