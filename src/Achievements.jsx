import { FaYoutube, FaArrowRight } from "react-icons/fa";
import freedomRunImg from "../imgs/achievements/freedom_run.jpeg";

const videos = [
  {
    title: "Legendary Parkour Motivation",
    description: "Placeholder for a famous movement inspiration video.",
    link: "https://www.youtube.com/"
  },
  {
    title: "Important Safety and Technique",
    description: "Placeholder for an important fundamentals tutorial.",
    link: "https://www.youtube.com/"
  },
  {
    title: "Traceurs Community Showcase",
    description: "Placeholder for your top training montage video.",
    link: "https://www.youtube.com/"
  }
];

export default function Achievements() {
  return (
    <>
    <section className="section">
      <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Our Achievements</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "60px" }}>
            Milestones and recognition that showcase our commitment to excellence in movement training.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "60px" }}>
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

          {/* Freedom Run Guinness Record Section */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "20px", 
            alignItems: "center",
            marginBottom: "15px",
            padding: "40px 0",
            borderTop: "2px solid #e0e0e0"
          }}>
            <div style={{ width: "85%", margin: "0 auto", borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
              <img src={freedomRunImg} alt="Freedom Run Event" style={{ width: "100%", maxHeight: "350px", display: "block" }} />
            </div>
            <div>
              <h2 style={{ color: "var(--primary)", marginBottom: "16px", fontSize: "1.8rem" }}>Guinness World Record Achievement</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333", marginBottom: "12px" }}>
                A remarkable milestone was achieved at our Freedom Run event! A 6-year-old participant from our academy set a Guinness World Record by completing 2 kilometers of blindfolded skipping.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
                This incredible achievement showcases the dedication, courage, and physical capability of our young trainees. It demonstrates how proper coaching, supportive community, and progressive training can unlock extraordinary potential in people of all ages.
              </p>
            </div>
          </div>
      </div>
    </section>

    {/* Videos Section */}
    <section className="section" id="videos">
      <div className="container">
        <div className="section-head">
          <h2 className="youtube-main-title">Featured Videos</h2>
        </div>
        <div className="videos-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.title}>
              <div className="video-placeholder">
                <FaYoutube />
              </div>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <a href={video.link} target="_blank" rel="noreferrer">
                Open Placeholder <FaArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
