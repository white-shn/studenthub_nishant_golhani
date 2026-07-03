import { Link } from 'react-router-dom'

// darkMode and toggleDark come from App.jsx as props
function Navbar({ darkMode, toggleDark }) {
  return (
    <nav id="navbar">
      <div className="nav-inner">
        <div className="nav-logo">StudentHub</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/announcements">Announcements</Link>

          <Link to="/about">About</Link>
        </div>
        <button className="theme-btn" onClick={toggleDark}>
          <iconify-icon
            icon={darkMode ? 'lucide:sun' : 'lucide:moon'} 
            width="18" 
            height="18">
          </iconify-icon>
        </button>
      </div>
    </nav>
  )
}

export default Navbar