import { useState } from 'react'
import announcements from '../data/announcements'

function Announcements() {
  const [query, setQuery] = useState('') // search box text

  // filter  based on search 
  const filtered = announcements.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section id="about"> {/* reusing  styles of about section */}
      <div className="about-inner">
        <h2 className="about-heading">Announcements</h2>

        <input
          type="text"
          className="text-input"
          placeholder="Search announcements..."
          
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: '100%', marginBottom: '25px' }}
        />

        {filtered.map(a => (
          <div key={a.id} className="dashboard-card" style={{ marginBottom: '12px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <strong className="card-title" style={{ margin: 0 }}>{a.title}</strong>
              <span className="about-text" style={{ margin: 0, fontSize: '0.85rem' }}>{a.date}</span>
            </div>
            <p className="about-text" style={{ margin: 0 }}>{a.desc}</p>
          </div>
        ))}

        {filtered.length===0 &&(
          <p className="empty-msg">No announcements match your search.</p>
        )}
      </div>
    </section>
  )
}

export default Announcements