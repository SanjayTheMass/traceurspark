export default function OtherServices() {
  return (
    <section className="section">
      <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Other Services</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "60px" }}>
            Beyond our core training programs, we offer specialized services tailored to meet diverse needs.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div className="service-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Corporate Wellness Programs</h3>
              <p>Bring movement and fitness to your workplace. Custom team building and wellness programs designed to improve employee health and morale.</p>
            </div>

            <div className="service-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>School Workshops</h3>
              <p>Interactive movement sessions for schools and colleges. Build confidence, strength, and coordination in students of all ages.</p>
            </div>

            <div className="service-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Private Coaching</h3>
              <p>One-on-one personalized training sessions tailored to your specific goals and fitness level.</p>
            </div>

            <div className="service-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Stunt Coordination & Choreography</h3>
              <p>Professional movement design and coordination for film, TV, and stage productions.</p>
            </div>

            <div className="service-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Event Activities</h3>
              <p>Exciting movement activities and demonstrations for events, festivals, and community gatherings.</p>
            </div>

            <div className="service-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Rehabilitation & Recovery</h3>
              <p>Specialized movement programs to support recovery and rehabilitation with expert guidance.</p>
            </div>
          </div>

          <div style={{ marginTop: "60px", textAlign: "center", padding: "40px", background: "#f5f5f5", borderRadius: "10px" }}>
            <h3>Have a Custom Request?</h3>
            <p>We can create tailored programs for your specific needs. Contact us to discuss your requirements!</p>
            <p style={{ marginTop: "20px" }}>
              <a href="https://wa.me/919363503310?text=I%20have%20a%20custom%20service%20inquiry" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  display: "inline-block",
                  padding: "12px 24px",
                  background: "var(--primary)",
                  color: "#fff",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}>
                Contact Us
              </a>
            </p>
          </div>
      </div>
    </section>
  );
}
