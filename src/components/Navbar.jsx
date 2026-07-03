import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-inner">
        <div className="nav-logo">StudentHub</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar