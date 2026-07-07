import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="section" style={{ marginBottom: "60px" }}>
      <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Get in Touch</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "60px" }}>
            Have questions? Want to join us? We'd love to hear from you!
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "60px" }}>
            <div className="contact-info" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>📞 Phone</h3>
              <p>
                <a href="tel:+919363503310" style={{ color: "#333", textDecoration: "none", fontWeight: "bold" }}>
                  +91 9363503310
                </a>
              </p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>Available during training hours</p>
            </div>

            <div className="contact-info" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>💬 WhatsApp</h3>
              <p>
                <a href="https://wa.me/919363503310" target="_blank" rel="noreferrer" style={{ color: "#333", textDecoration: "none", fontWeight: "bold" }}>
                  Message us directly
                </a>
              </p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>Quick responses and chat support</p>
            </div>

            <div className="contact-info" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>📧 Email</h3>
              <p>
                <a href="mailto:traceurspark@gmail.com" style={{ color: "#333", textDecoration: "none", fontWeight: "bold" }}>
                  traceurspark@gmail.com
                </a>
              </p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>We reply within 24 hours</p>
            </div>

            <div className="contact-info" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>📍 Location</h3>
              <p style={{ fontWeight: "bold" }}>Traceurs Park Movement Academy</p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "5px" }}>
                Trichy, Tamil Nadu, India
              </p>
              <p style={{ marginTop: "15px" }}>
                <a href="https://maps.app.goo.gl/AgeMqVWusJUQKwkt8" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: "bold", textDecoration: "none" }}>
                  View on Map →
                </a>
              </p>
            </div>

            <div className="contact-info" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>🕐 Hours</h3>
              <p style={{ fontSize: "0.9rem" }}>
                <strong>Monday - Saturday:</strong> 6:00 AM - 9:00 PM
              </p>
              <p style={{ fontSize: "0.9rem", marginTop: "5px" }}>
                <strong>Sunday:</strong> 8:00 AM - 6:00 PM
              </p>
            </div>

            <div className="contact-info" style={{ padding: "30px", background: "#f5f5f5", borderRadius: "10px" }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>🌐 Social Media</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a href="https://www.instagram.com/traceurspark" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ width: "40px", height: "40px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#111", color: "#fff", textDecoration: "none" }}>
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/share/1FpxTeUvQu/" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ width: "40px", height: "40px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#111", color: "#fff", textDecoration: "none" }}>
                  <FaFacebookF />
                </a>
                <a href="https://x.com/Traceurspark" target="_blank" rel="noreferrer" aria-label="X (Twitter)" style={{ width: "40px", height: "40px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#111", color: "#fff", textDecoration: "none" }}>
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/in/traceurs-park" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ width: "40px", height: "40px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#111", color: "#fff", textDecoration: "none" }}>
                  <FaLinkedinIn />
                </a>
                <a href="https://www.youtube.com/@traceurspark" target="_blank" rel="noreferrer" aria-label="YouTube" style={{ width: "40px", height: "40px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#111", color: "#fff", textDecoration: "none" }}>
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px", background: "linear-gradient(120deg, #f5f5f5, #fff)", borderRadius: "10px", textAlign: "center" }}>
            <h2 style={{ marginBottom: "20px" }}>Ready to Start Your Movement Journey?</h2>
            <p style={{ marginBottom: "30px", color: "#666" }}>
              Join thousands of students who have transformed their bodies and minds through movement training.
            </p>
            <a href="https://wa.me/919363503310?text=More%20Information%20about%20Traceurs%20Park" 
              target="_blank" 
              rel="noreferrer"
              style={{ 
                display: "inline-block",
                padding: "14px 32px",
                background: "var(--primary)",
                color: "#fff",
                borderRadius: "25px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.1rem"
              }}>
              Contact Us Now
            </a>
          </div>
      </div>
    </section>
  );
}
