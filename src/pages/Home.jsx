import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <header id="home" className="hero">
        <div className="hero-inner">
          <h1 className="hero-heading">Simplify your Student Life</h1>
          <p className="hero-sub">Plan your tasks, build habits, and stay ahead of every deadline.</p>
          <Link to="/dashboard" className="hero-btn">Get Started</Link>
        </div>
      </header>

      <section id="features">
        <div className="features-inner">
          <h2 className="features-heading">Everything you need</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <iconify-icon icon="mdi:calendar-outline" width="28" height="28"></iconify-icon>
              </div>
              <h3>Schedule Planner</h3>
              <p>Plan your weekly timetable and never miss a class</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <iconify-icon icon="mdi:chart-bar" width="28" height="28"></iconify-icon>
              </div>
              <h3>Attendance Tracker</h3>
              <p>Track subject-wise attendance and stay above cutoff</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <iconify-icon icon="mdi:clipboard-text-outline" width="28" height="28"></iconify-icon>
              </div>
              <h3>Assignment Tracker</h3>
              <p>Never miss a deadline again</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <iconify-icon icon="mdi:bell-outline" width="28" height="28"></iconify-icon>
              </div>
              <h3>Campus Events</h3>
              <p>Stay connected to campus life</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home