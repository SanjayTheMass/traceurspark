export default function Career() {
  return (
    <section className="section">
      <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Join Our Team</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "60px" }}>
            Become part of Traceurs Park and help us build the future of movement training.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "60px" }}>
            <div className="career-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Movement Coaches</h3>
              <p>We're looking for passionate coaches with expertise in Parkour, Calisthenics, or other movement disciplines.</p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "15px" }}>Requirements: 2+ years experience, certification preferred, strong teaching skills.</p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>Freshers can also apply. Selection is based on your passion for movement and practical teaching potential.</p>
            </div>

            <div className="career-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Fitness Instructors</h3>
              <p>Join us as a fitness instructor and help our community achieve their health goals through progressive training.</p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "15px" }}>Requirements: Fitness certification, passion for health, community engagement skills.</p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>Freshers are welcome to apply. Strong passion, consistency, and willingness to learn are valued in the hiring process.</p>
            </div>

            <div className="career-card" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>Admin Staffs</h3>
              <p>Support day-to-day academy operations including admissions follow-up, class scheduling, attendance records, fee tracking, and front-desk coordination.</p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "15px" }}>Requirements: Good computer skills (Excel/Google Sheets), clear communication, organized documentation, and ability to handle parent/student queries professionally.</p>
            </div>
          </div>

          <div style={{ marginTop: "60px", textAlign: "center", padding: "40px", background: "#f5f5f5", borderRadius: "10px" }}>
            <h3>Interested in Joining?</h3>
            <p>Send us your resume and a brief introduction to traceurspark@gmail.com or contact us via WhatsApp.</p>
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://wa.me/919363503310?text=I%20am%20interested%20in%20joining%20Traceurs%20Park" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  display: "inline-block",
                  padding: "12px 24px",
                  background: "linear-gradient(120deg, var(--primary), #ff3b36)",
                  border: "1.5px solid var(--primary-dark)",
                  color: "#fff",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}>
                Get In Touch
              </a>
              <a href="https://forms.gle/fJF2dL5vJoBxMZSW6"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  background: "#111",
                  color: "#fff",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}>
                Fill The Form
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}
