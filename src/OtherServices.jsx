// Import images from our-works folder
import corpWellness from "../imgs/our-works/corporate.jpeg";
import workshops from "../imgs/our-works/workshops.jpeg";
import summerCamps from "../imgs/our-works/summer-camps.jpeg";
import stunts from "../imgs/our-works/stunt.jpeg";
import publicSpeaking from "../imgs/our-works/public-speaking.jpeg";
import calligraphy from "../imgs/our-works/calligraphy.jpeg";
import outdoorActivities from "../imgs/our-works/outdoor.jpeg";
import monthlyActivities from "../imgs/our-works/monthly.jpeg";
import celebrationEvents from "../imgs/our-works/celebration.jpeg";

const services = [
  {
    title: "Corporate Wellness Programs",
    description: "Bring movement and fitness to your workplace. Custom team building and wellness programs designed to improve employee health and morale.",
    image: corpWellness
  },
  {
    title: "Workshops",
    description: "Interactive movement sessions for schools and colleges. Build confidence, strength, and coordination in students of all ages.",
    image: workshops
  },
  {
    title: "Summer Camps",
    description: "Engaging summer programs designed for children and teens. Learn parkour, calisthenics, and movement skills in a fun, safe environment.",
    image: summerCamps
  },
  {
    title: "Stunt Coordination & Choreography",
    description: "Professional movement design and coordination for film, TV, and stage productions.",
    image: stunts
  },
  {
    title: "Public Speaking",
    description: "Develop confidence and communication skills through movement-based workshops. Overcome stage fright and present with poise.",
    image: publicSpeaking
  },
  {
    title: "Calligraphy",
    description: "Learn the art of beautiful handwriting and letter formation. Combine movement precision with artistic expression.",
    image: calligraphy
  },
  {
    title: "Outdoor Activities",
    description: "Adventure-packed outdoor movement sessions. Experience parkour, free running, and exploration in natural environments.",
    image: outdoorActivities
  },
  {
    title: "Monthly Activities",
    description: "Regular themed movement challenges and training sessions. Build community and track your progress throughout the month.",
    image: monthlyActivities
  },
  {
    title: "Celebration Events",
    description: "Special events and celebrations featuring performances, competitions, and community gatherings. Join the movement revolution!",
    image: celebrationEvents
  }
];

export default function OtherServices() {
  return (
    <section className="section">
      <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Our Works</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "60px" }}>
            Beyond our core training programs, we offer specialized services tailored to meet diverse needs.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {services.map((service, index) => (
              <div key={index} style={{ overflow: "hidden", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                <img src={service.image} alt={service.title} style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }} />
                <div style={{ padding: "30px", background: "#f5f5f5" }}>
                  <h3 style={{ color: "var(--primary)", marginBottom: "15px", marginTop: "0" }}>{service.title}</h3>
                  <p style={{ margin: "0", color: "#333", lineHeight: "1.6" }}>{service.description}</p>
                </div>
              </div>
            ))}
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
