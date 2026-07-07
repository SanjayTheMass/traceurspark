export default function Achievements() {
  return (
    <section className="section">
      <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Our Achievements</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "60px" }}>
            Milestones and recognition that showcase our commitment to excellence in movement training.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div className="achievement-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>4,000+ Students Trained</h3>
              <p>Successfully trained thousands of students across all age groups and skill levels since 2012.</p>
            </div>

            <div className="achievement-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>14+ Years of Excellence</h3>
              <p>More than a decade of consistent coaching, safety culture, and community building.</p>
            </div>

            <div className="achievement-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Film & Production Work</h3>
              <p>Provided stunt performers, movement training, and choreography for film and short film productions.</p>
            </div>

            <div className="achievement-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>School & College Programs</h3>
              <p>Conducted workshops and structured programs for educational institutions across Trichy.</p>
            </div>

            <div className="achievement-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Community Recognition</h3>
              <p>Built a strong reputation based on trust, professionalism, and quality coaching standards.</p>
            </div>

            <div className="achievement-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Traceurs Park Academy Launch</h3>
              <p>2026 marks the launch of our dedicated academy facility with purpose-built training spaces.</p>
            </div>
          </div>
      </div>
    </section>
  );
}
