import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="name">
        Luísa Naomi<br />
        de Castro Suda
      </h1>
      <div className="divider" />
      <div className="info-row">
        <div className="info-group">
          <span className="icon">📍</span>
          10707, Berlin<br />
          <span className="phone">+49 152 0 9614571</span>
        </div>
        <div className="info-group">
          <span className="icon">✉️</span>
          <a href="mailto:hi@luisasuda.com" className="contact-link">hi@luisasuda.com</a><br />
          <a href="https://www.linkedin.com/in/luisasuda" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="info-group">
          <span className="icon blue">●</span>
          Valid EU Blue Card until 2029
        </div>
      </div>
      <div className="statement">
        <p>
          <b>Senior Product Manager</b> actively seeking new opportunities to transition into <b>Electrical Engineering, Systems Engineering, or Telecoms Engineering</b> roles.<br />
          Open to contract or permanent positions.
        </p>
      </div>
    </div>
  );
}