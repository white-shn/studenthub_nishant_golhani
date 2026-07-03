function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-inner">
        <div className="nav-logo">StudentHub</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/about">About</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar