import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaInstagram } from "react-icons/fa";

// Import trainer images
import trainerChief from "../imgs/trainers/Chief Trainer.jpg.jpeg";
import trainerWomen from "../imgs/trainers/Women-trainer.jpeg";
import trainerBody from "../imgs/trainers/Body Building Trainer.jpeg";
import trainerAnimalFlow from "../imgs/trainers/Animal Flow Trainer.jpeg";
import trainerNunchucks from "../imgs/trainers/Nunchucks-trainer.jpeg";
import aboutUsBanner from "../imgs/about-us/AboutUsBanner.jpg.jpeg";
import tpkLogo from "../imgs/about-us/tpk_logo.jpeg";
import newEraLogo from "../imgs/about-us/new_era_logo.png";
import trainerrelationship from "../imgs/trainers/Relationship_Manager.jpeg";
import trainercombat from "../imgs/trainers/combat_Sports_Instructor.jpeg";
import trainercalisthenics from "../imgs/trainers/Calisthenics_Instructor.jpeg";
import trainercreativemanager from "../imgs/trainers/wasim.jpg.jpeg";

const trainers = [
  { name: "Mohamed Imran Shajahan", focus: "Founder & Master Coach", intro: "Chief Trainer: Advanced Parkour Training and Coaching", instagram: "https://www.instagram.com/imran_parkour" ,image: trainerChief },
  { name: "Muthu Kumaran S", focus: "Relationship Manager", intro: "Managing relationships and ensuring client satisfaction", instagram: "https://www.instagram.com/mk_muthuu" ,image: trainerrelationship },  
  { name: "Jamal", focus: "Combat Sports Instructor", intro: "Building confidence, fitness and endurance through combat sports", instagram: "https://www.instagram.com/_theprabhu__", image: trainercombat },
  { name: "Tharani Murali", focus: "Women's wellness and Fitness Instructor", intro: "Strength and Inclusive Movement exclusive for women", instagram: "https://www.instagram.com/thara_sdiaryy", image: trainerWomen },
  { name: "Vignesh", focus: "Fitness Trainer", intro: "Power, Endurance and Conditioning focused body building training forged for individuals based on their needs", instagram: "https://www.instagram.com/_theprabhu__", image: trainerBody },
   { name: "S.A.Karnesh", focus: "Primal Movement Trainer", intro: "Mobility, Ground Flow and Agility. Master natural movement through animal-inspired body flow training", instagram: "https://www.instagram.com/tn_45_mt_rider_", image: trainerAnimalFlow },
  { name: "M.A. Gokul", focus: "Traditional Weapon's Instructor", intro: "Unlock the art of traditional Weapons with skill, discipline, and flow. Train smarter. Strike faster. Move sharper", instagram: "https://www.instagram.com/arul_venkatesh", image: trainerNunchucks },
  { name: "Mohammed Suhail", focus: "Calisthenics Instructor", intro: "Your body is the gym. Let's make it unstoppable. Progressive bodyweight training for real-world strength", instagram: "https://www.instagram.com/iam_suhail__", image: trainercalisthenics },
  { name: "Mohammed Wasim Akram S", focus: "Brand And Creative Manager ", intro: "Overseeing technical operations and ensuring smooth workflow", instagram: "https://www.instagram.com/mr.mohamedwasim" ,image: trainercreativemanager },
  
];

const TEAM_TILES_PER_SCROLL = 3;

const aboutStats = [
  { label: "Students Trained", target: 4000, suffix: "+" },
  { label: "Years Experience", target: 14, suffix: "+" },
  { label: "Safety Committed", target: 100, suffix: "%" }
];

const founder = {
  name: "Mohamed Imran Shajahan",
  role: "Founder & Master Coach",
  image: trainerChief,
  bio: [
    "Founder of Trichy Parkour (2012) | Founder & Head Coach - Traceurs Park | The Movement Academy Parkour Coach | Movement Educator | Martial Arts & Functional Fitness Trainer",
    "Mohamed Imran Shajahan is a pioneering parkour coach and movement educator from Tiruchirappalli, Tamil Nadu. In 2012, he founded Trichy Parkour, becoming one of the early pioneers dedicated to introducing and developing parkour in the region. With over 14 years of coaching experience, he has played a key role in building a strong movement community and promoting safe, structured parkour training.",
    "As the Founder & Head Coach of Traceurs Park - The Movement Academy, Imran has trained more than 4,000 students, helping children, youth, adults, athletes, and fitness enthusiasts develop strength, agility, confidence, discipline, and resilience through movement.",
    "His coaching philosophy integrates parkour fundamentals with functional fitness, natural movement, bodyweight strength, mobility, and martial arts, enabling students to build complete physical capability and mental confidence.",
    "Through workshops, demonstrations, school programs, and community initiatives, Imran continues to inspire people to embrace movement as a lifelong practice. His mission is to elevate the standard of parkour in India by creating a safe, inclusive, and professional environment where individuals can unlock their full potential."
  ]
};

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
  const [aboutStatsTick, setAboutStatsTick] = useState(0);
  const [animatedAboutStats, setAnimatedAboutStats] = useState(
    aboutStats.map(() => 0)
  );
  const teamTrackRef = useRef(null);
  const aboutStatsSectionRef = useRef(null);
  const aboutStatsInViewRef = useRef(false);

  // Scroll-triggered animations
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const maxTeamIndex = Math.max(0, trainers.length - visibleTeamCards);

  const aboutStatsDisplay = aboutStats.map((stat, index) => {
    const value = animatedAboutStats[index] ?? 0;
    const displayValue = value.toLocaleString("en-IN");
    return `${displayValue}${stat.suffix}`;
  });

  const nextTeamPage = () => {
    if (teamIndex < maxTeamIndex) {
      const newIndex = teamIndex + 1;
      setTeamIndex(newIndex);
      if (teamTrackRef.current) {
        const cards = teamTrackRef.current.querySelectorAll('.trainer-card');
        const offset = cards[newIndex] ? cards[newIndex].offsetLeft : 0;
        setTeamOffsetPx(offset);
      }
    }
  };

  const previousTeamPage = () => {
    if (teamIndex > 0) {
      const newIndex = teamIndex - 1;
      setTeamIndex(newIndex);
      if (teamTrackRef.current) {
        const cards = teamTrackRef.current.querySelectorAll('.trainer-card');
        const offset = cards[newIndex] ? cards[newIndex].offsetLeft : 0;
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

  useEffect(() => {
    const section = aboutStatsSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !aboutStatsInViewRef.current) {
          aboutStatsInViewRef.current = true;
          setAboutStatsTick((previous) => previous + 1);
          return;
        }

        if (!entry.isIntersecting) {
          aboutStatsInViewRef.current = false;
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimatedAboutStats(aboutStats.map(() => 0));

    const durationMs = 1700;
    const startTime = performance.now();
    let frameId = 0;

    const animateCounters = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / durationMs, 1);
      setAnimatedAboutStats(
        aboutStats.map((stat) => Math.floor(stat.target * progress))
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animateCounters);
      }
    };

    frameId = requestAnimationFrame(animateCounters);

    return () => cancelAnimationFrame(frameId);
  }, [aboutStatsTick]);

  return (
    <><section className="about-hero">
      <img className="about-hero-image" src={aboutUsBanner} alt="Traceurs Park academy banner" />
      <div className="about-hero-placeholder"></div>
      <div className="about-hero-overlay">
        <h1>About Traceurs Park</h1>
        <p>Building Movement, Building Community Since 2012</p>
      </div>
    </section>

    <div className="container">
      <section className="about-founder fade-in-up" aria-label="Founder information">
        <div className="about-founder-media">
          <img src={founder.image} alt={`${founder.name} portrait`} />
        </div>
        <div className="about-founder-content">
          <p className="about-founder-tag">Founder Spotlight</p>
          <h2>{founder.name}</h2>
          <h3>{founder.role}</h3>
          {founder.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="timeline-card timeline-2012 fade-in-up">
          <img className="timeline-logo" src={tpkLogo} alt="TPK logo" />
          <div className="timeline-year">2012</div>
          <h3>The Beginning</h3>
          <p>Trichy Parkour founded with a vision to introduce movement to all ages</p>
        </div>
        <div className="timeline-card timeline-2026 fade-in-up" style={{ transitionDelay: '0.15s' }}>
          <img className="timeline-logo" src={newEraLogo} alt="Traceurs Park new era logo" />
          <div className="timeline-year">2026</div>
          <h3>New Era</h3>
          <p>Traceurs Park Movement Academy launches with purpose-built facilities</p>
        </div>
      </section>

      {/* Stats Highlights */}
      <section ref={aboutStatsSectionRef} className="about-stats">
        {aboutStats.map((stat, index) => (
          <div className="stat-highlight fade-in-up" key={stat.label} style={{ transitionDelay: `${index * 0.12}s` }}>
            <h3>{aboutStatsDisplay[index]}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Story Sections */}
      <section className="about-section fade-in-up">
        <h2>Building Movement Since 2012</h2>
        <p>
          Founded in 2012, Trichy Parkour began with a simple vision to introduce the art of movement to people of all ages and backgrounds. What started as a small community of passionate practitioners has grown into one of the region's most trusted movement training organizations.
        </p>
        <p>
          Over the past 14 years, we have earned the confidence of thousands through consistent coaching, a strong safety culture, and a commitment to helping every individual unlock their physical potential.
        </p>
      </section>

      <section className="about-section about-highlight-section fade-in-up" style={{ transitionDelay: '0.1s' }}>
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

      <section className="about-section fade-in-up">
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

      <section className="about-section about-philosophy fade-in-up" style={{ transitionDelay: '0.1s' }}>
        <h2>Our Philosophy</h2>
        <p className="philosophy-tagline">We believe movement is for everyone.</p>
        <p>
          Whether your goal is to improve fitness, learn parkour, develop athletic performance, overcome physical challenges, or pursue movement professionally, our programs are designed to help you progress safely and confidently.
        </p>
        <div className="philosophy-pillars">
          <div className="pillar fade-in-up" style={{ transitionDelay: '0.1s' }}>
            <h4>Safety First</h4>
            <p>Expert coaching with professional safety protocols</p>
          </div>
          <div className="pillar fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <h4>Progressive</h4>
            <p>Structured skill development at your own pace</p>
          </div>
          <div className="pillar fade-in-up" style={{ transitionDelay: '0.3s' }}>
            <h4>Functional</h4>
            <p>Strength, mobility and real-world movement</p>
          </div>
          <div className="pillar fade-in-up" style={{ transitionDelay: '0.4s' }}>
            <h4>Community</h4>
            <p>Respect, discipline and belonging</p>
          </div>
        </div>
      </section>

      <section className="about-section fade-in-up">
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
                      <a href={trainer.instagram || "#"} target="_blank" rel="noreferrer" aria-label={`${trainer.name} Instagram`}>
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                  <div className="trainer-body">
                    <h2>{trainer.name}</h2>
                    <p className="trainer-focus">{trainer.focus}</p>
                    <p>{trainer.intro}</p>
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
