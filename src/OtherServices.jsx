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

const bigImageImports = import.meta.glob(
  "../imgs/our-works/*_big.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);

const getBigImageMap = () => {
  const map = new Map();

  Object.entries(bigImageImports).forEach(([filePath, src]) => {
    const fileName = filePath.split("/").at(-1) || "";
    const key = fileName.replace(/\.[^/.]+$/, "").toLowerCase();
    map.set(key, src);
  });

  return map;
};

const bigImageMap = getBigImageMap();

const escapeXmlText = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");

const createBigPlaceholder = (title) => {
  const safeTitle = escapeXmlText(title);
  const safeFileHint = escapeXmlText(title.toLowerCase().replace(/&/g, "and"));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#191919"/><stop offset="100%" stop-color="#2b2b2b"/></linearGradient></defs><rect width="1200" height="700" fill="url(#bg)"/><rect x="26" y="26" width="1148" height="648" rx="18" ry="18" fill="none" stroke="#d84b47" stroke-width="3" stroke-dasharray="10 12"/><text x="600" y="330" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-size="40" font-weight="700" fill="#f5f5f5">${safeTitle}</text><text x="600" y="385" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-size="24" fill="#d2d2d2">Add ${safeFileHint}_big.jpeg</text></svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const getBigImageFromCandidates = (candidates, title) => {
  const matchedImage = candidates
    .map((candidate) => bigImageMap.get(candidate.toLowerCase()))
    .find(Boolean);

  return matchedImage || createBigPlaceholder(title);
};

const services = [
  {
    title: "Corporate Wellness Programs",
    description: "Bring movement and fitness to your workplace. Custom team building and wellness programs designed to improve employee health and morale.",
    image: corpWellness,
    bigImageCandidates: ["corporate_big"]
  },
  {
    title: "Workshops",
    description: "Interactive movement sessions for schools and colleges. Build confidence, strength, and coordination in students of all ages.",
    image: workshops,
    bigImageCandidates: ["workshops_big"]
  },
  {
    title: "Summer Camps",
    description: "Engaging summer programs designed for children and teens. Learn parkour, calisthenics, and movement skills in a fun, safe environment.",
    image: summerCamps,
    bigImageCandidates: ["summer-camps_big", "summercamp_big"]
  },
  {
    title: "Stunt Coordination & Choreography",
    description: "Professional movement design and coordination for film, TV, and stage productions.",
    image: stunts,
    bigImageCandidates: ["stunt_big"]
  },
  {
    title: "Public Speaking",
    description: "Develop confidence and communication skills through movement-based workshops. Overcome stage fright and present with poise.",
    image: publicSpeaking,
    bigImageCandidates: ["public-speaking_big"]
  },
  {
    title: "Calligraphy",
    description: "Learn the art of beautiful handwriting and letter formation. Combine movement precision with artistic expression.",
    image: calligraphy,
    bigImageCandidates: ["calligraphy_big"]
  },
  {
    title: "Outdoor Activities",
    description: "Adventure-packed outdoor movement sessions. Experience parkour, free running, and exploration in natural environments.",
    image: outdoorActivities,
    bigImageCandidates: ["outdoor_big"]
  },
  {
    title: "Monthly Activities",
    description: "Regular themed movement challenges and training sessions. Build community and track your progress throughout the month.",
    image: monthlyActivities,
    bigImageCandidates: ["monthly_big"]
  },
  {
    title: "Celebration Events",
    description: "Special events and celebrations featuring performances, competitions, and community gatherings. Join the movement revolution!",
    image: celebrationEvents,
    bigImageCandidates: ["celebration_big"]
  }
];

const servicesWithBigImages = services.map((service) => ({
  ...service,
  bigImage: getBigImageFromCandidates(service.bigImageCandidates, service.title)
}));

export default function OtherServices() {
  return (
    <section className="section">
      <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Our Works</h1>
          <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "60px" }}>
            Beyond our core training programs, we offer specialized services tailored to meet diverse needs.
          </p>

          <div className="our-works-grid">
            {servicesWithBigImages.map((service, index) => (
              <div key={index} className="our-works-card">
                <div className="our-works-media-row">
                  <div className="our-works-left-stack">
                    <div className="our-works-left-thumb-wrap">
                      <img
                        src={service.image}
                        alt={`${service.title} thumbnail`}
                        className="our-works-left-thumb"
                      />
                    </div>
                    <div className="our-works-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <div className="our-works-right-big-wrap">
                    <img
                      src={service.bigImage}
                      alt={`${service.title} large`}
                      className="our-works-right-big"
                    />
                  </div>
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
