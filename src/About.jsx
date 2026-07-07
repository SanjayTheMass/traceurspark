import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaInstagram } from "react-icons/fa";

// Import trainer images
import trainerChief from "../imgs/trainers/Chief Trainer.jpg.jpeg";
import trainerWomen from "../imgs/trainers/Women-trainer.jpeg";
import trainerBody from "../imgs/trainers/Body Building Trainer.jpeg";
import trainerAnimalFlow from "../imgs/trainers/Animal Flow Trainer.jpeg";
import trainerNunchucks from "../imgs/trainers/Nunchucks-trainer.jpeg";

const trainers = [
  { name: "Chief Trainer", focus: "Advanced Parkour and Coaching", image: trainerChief },
  { name: "Women Trainer", focus: "Strength and Inclusive Movement", image: trainerWomen },
  { name: "Body Building Trainer", focus: "Power, Endurance and Conditioning", image: trainerBody },
  { name: "Animal Flow Trainer", focus: "Mobility, Ground Flow and Agility", image: trainerAnimalFlow },
  { name: "Nunchucks Trainer", focus: "Freestyle Nunchukus Fundamentals", image: trainerNunchucks },
  { name: "Calisthenics Trainer", focus: "Breath, Balance and Flexibility", image: null }
];

const TEAM_TILES_PER_SCROLL = 3;

function getVisibleTeamCards() {
  if (window.innerWidth <= 740) {
    return 1;
  }
  if (window.innerWidth <= 1060) {
    return 2;
  }
  return TEAM_TILES_PER_SCROLL;
}

export default function About() {
  const [teamIndex, setTeamIndex] = useState(0);
  const [visibleTeamCards, setVisibleTeamCards] = useState(getVisibleTeamCards);
  const [teamOffsetPx, setTeamOffsetPx] = useState(0);
  const [teamTouchStartX, setTeamTouchStartX] = useState(null);
  const teamTrackRef = useRef(null);

  const maxTeamIndex = Math.max(0, trainers.length - visibleTeamCards);

  const nextTeamPage = () => {
    if (teamIndex < maxTeamIndex) {
      const newIndex = teamIndex + 1;
      setTeamIndex(newIndex);
      if (teamTrackRef.current) {
        const offset = (newIndex * teamTrackRef.current.offsetWidth) / visibleTeamCards;
        setTeamOffsetPx(offset);
      }
    }
  };

  const previousTeamPage = () => {
    if (teamIndex > 0) {
      const newIndex = teamIndex - 1;
      setTeamIndex(newIndex);
      if (teamTrackRef.current) {
        const offset = (newIndex * teamTrackRef.current.offsetWidth) / visibleTeamCards;
        setTeamOffsetPx(offset);
      }
    }
  };

  const handleTeamTouchStart = (e) => {
    setTeamTouchStartX(e.touches[0].clientX);
  };

  const handleTeamTouchEnd = (e) => {
    if (teamTouchStartX === null) return;
    const diff = teamTouchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      diff > 0 ? nextTeamPage() : previousTeamPage();
    }
    setTeamTouchStartX(null);
  };

  return (
    <><section className="about-hero">
      <div className="about-hero-placeholder"></div>
      <div className="about-hero-overlay">
        <h1>About Traceurs Park</h1>
        <p>Building Movement, Building Community Since 2012</p>
      </div>
    </section>

    <div className="container">
      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="timeline-card timeline-2012">
          <div className="timeline-year">2012</div>
          <h3>The Beginning</h3>
          <p>Trichy Parkour founded with a vision to introduce movement to all ages</p>
        </div>
        <div className="timeline-card timeline-2026">
          <div className="timeline-year">2026</div>
          <h3>New Era</h3>
          <p>Traceurs Park Movement Academy launches with purpose-built facilities</p>
        </div>
      </section>

      {/* Stats Highlights */}
      <section className="about-stats">
        <div className="stat-highlight">
          <h3>4,000+</h3>
          <p>Students Trained</p>
        </div>
        <div className="stat-highlight">
          <h3>14+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-highlight">
          <h3>100%</h3>
          <p>Safety Committed</p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="about-section">
        <h2>Building Movement Since 2012</h2>
        <p>
          Founded in 2012, Trichy Parkour began with a simple vision to introduce the art of movement to people of all ages and backgrounds. What started as a small community of passionate practitioners has grown into one of the region's most trusted movement training organizations.
        </p>
        <p>
          Over the past 14 years, we have earned the confidence of thousands through consistent coaching, a strong safety culture, and a commitment to helping every individual unlock their physical potential.
        </p>
      </section>

      <section className="about-section about-highlight-section">
        <h2>A New Chapter: Traceurs Park Movement Academy</h2>
        <div className="highlight-box">
          <p>
            In 2026, Trichy Parkour enters an exciting new era with the launch of Traceurs Park Movement Academy - a purpose-built space designed to redefine movement education.
          </p>
          <p>
            More than just a training facility, Traceurs Park is a community where movement becomes a lifelong skill. Our academy combines structured coaching, progressive learning, and professional instruction in a safe and inspiring environment for beginners, enthusiasts, athletes, and professionals alike.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>Our Journey</h2>
        <ul className="about-list about-journey-list">
          <li>
            <span className="list-icon">✓</span>
            Trained 4,000+ students across different age groups and skill levels
          </li>
          <li>
            <span className="list-icon">✓</span>
            Coached school and college students through workshops and structured programs
          </li>
          <li>
            <span className="list-icon">✓</span>
            Helped fitness enthusiasts and athletes improve strength, agility, coordination, and confidence
          </li>
          <li>
            <span className="list-icon">✓</span>
            Worked with film and short film productions, providing parkour performers and stunt movement training
          </li>
          <li>
            <span className="list-icon">✓</span>
            Built a strong reputation based on trust, professionalism, and quality coaching
          </li>
        </ul>
      </section>

      <section className="about-section about-philosophy">
        <h2>Our Philosophy</h2>
        <p className="philosophy-tagline">We believe movement is for everyone.</p>
        <p>
          Whether your goal is to improve fitness, learn parkour, develop athletic performance, overcome physical challenges, or pursue movement professionally, our programs are designed to help you progress safely and confidently.
        </p>
        <div className="philosophy-pillars">
          <div className="pillar">
            <h4>Safety First</h4>
            <p>Expert coaching with professional safety protocols</p>
          </div>
          <div className="pillar">
            <h4>Progressive</h4>
            <p>Structured skill development at your own pace</p>
          </div>
          <div className="pillar">
            <h4>Functional</h4>
            <p>Strength, mobility and real-world movement</p>
          </div>
          <div className="pillar">
            <h4>Community</h4>
            <p>Respect, discipline and belonging</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Looking Ahead</h2>
        <p>
          As we evolve into Traceurs Park Movement Academy, our mission remains the same: to inspire people to move better, think stronger, and grow through movement.
        </p>
        <p>
          From our beginnings in 2012 to the launch of our new academy in 2026, our journey has always been driven by passion, trust, and a commitment to excellence.
        </p>
        <p className="about-closing">
          We are proud of how far we have come and even more excited for what lies ahead.
        </p>
      </section>
    </div>

    {/* Team Section */}
    <section className="section" id="team">
      <div className="container">
        <div className="section-head">
          <h2 className="team-main-title">Our Expert Trainers</h2>
          <p className="team-subtitle">Dedicated Professionals for Every Movement Style</p>
        </div>
        <div
          className="team-carousel"
          onTouchStart={handleTeamTouchStart}
          onTouchEnd={handleTeamTouchEnd}
        >
          <button
            className="team-nav-btn left"
            type="button"
            aria-label="Previous team slides"
            onClick={previousTeamPage}
            disabled={teamIndex === 0}
          >
            <FaChevronLeft />
          </button>

          <div className="team-viewport">
            <div
              ref={teamTrackRef}
              className="team-track"
              style={{ transform: `translateX(-${teamOffsetPx}px)` }}
              aria-live="polite"
            >
              {trainers.map((trainer) => (
                <article className="trainer-card" key={trainer.name}>
                  <div className="trainer-media">
                    {trainer.image ? (
                      <img src={trainer.image} alt={trainer.name} />
                    ) : (
                      <div className="trainer-placeholder-img" aria-label={trainer.name} />
                    )}
                    <div className="trainer-overlay-links" aria-label={`${trainer.name} social links`}>
                      <a href="#" aria-label={`${trainer.name} Instagram placeholder`}>
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                  <div className="trainer-body">
                    <h3>{trainer.name}</h3>
                    <p><b>{trainer.focus}</b></p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className="team-nav-btn right"
            type="button"
            aria-label="Next team slides"
            onClick={nextTeamPage}
            disabled={teamIndex === maxTeamIndex}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="team-dots" aria-hidden="true">
          {Array.from({ length: maxTeamIndex + 1 }).map((_, index) => (
            <span
              key={`team-dot-${index}`}
              className={`team-dot ${index === teamIndex ? "is-active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
