import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaFacebookF,
  FaGift,
  FaHeadset,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaTwitter,
  FaUsers,
  FaYoutube
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logo from "../imgs/logos/logo.png";
import blackLogo from "../imgs/logos/black-logo.png";

import banner1 from "../imgs/banner-images/Banner-image-1.jpg.jpeg";
import banner2 from "../imgs/banner-images/Banner-image-2.jpeg";
import banner3 from "../imgs/banner-images/Banner-image-3.jpg.jpeg";

import parkourImg from "../imgs/our-services/1.Parkour.jpg.jpeg";
import calisthenicsImg from "../imgs/our-services/2.Calisthenics.jpg.jpeg";
import nunchucksImg from "../imgs/our-services/3.Nunchuks.jpg.jpeg";
import ninjaImg from "../imgs/our-services/4.Ninja Movement Training.jpg.jpeg";
import filmStuntImg from "../imgs/our-services/5.Film Stunt.jpg.jpeg";
import yogaImg from "../imgs/our-services/6.Yoga.jpg.jpeg";
import karlaImg from "../imgs/our-services/7.Karlakttaai.jpg.jpeg";
import fitnessImg from "../imgs/our-services/8.General Body Fitness.jpg.jpeg";
import flipsImg from "../imgs/our-services/9.Flips.jpg.jpeg";
import dietImg from "../imgs/our-services/10.Diet and Nutristion.jpg.jpeg";

import trainerChief from "../imgs/trainers/Chief Trainer.jpg.jpeg";
import trainerWomen from "../imgs/trainers/Women-trainer.jpeg";
import trainerBody from "../imgs/trainers/Body Building Trainer.jpeg";
import trainerAnimalFlow from "../imgs/trainers/Animal Flow Trainer.jpeg";
import trainerNunchucks from "../imgs/trainers/Nunchucks-trainer.jpeg";
import trainerYoga from "../imgs/trainers/yoga-trainer.jpeg";

import partnerWayToSuccess from "../imgs/client-logos/way to success.jfif.jpeg";
import partnerDovyo from "../imgs/client-logos/dovyo.png";
import partnerSevai from "../imgs/client-logos/sevai.png";
import partnerNit from "../imgs/client-logos/NIT.jfif.jpeg";
import partnerFitIndia from "../imgs/client-logos/fitindia.png";
import partnerWisdom from "../imgs/client-logos/wisdom.png";

import testimonialImg from "../imgs/testimonials/chinnappan.jpeg";
import testimonialsBg from "../imgs/testimonials-bg.jpeg";

const services = [
  { title: "Parkour", image: parkourImg },
  { title: "Calisthenics", image: calisthenicsImg },
  { title: "Ninja Movement Training", image: ninjaImg },
  { title: "Yoga", image: yogaImg },
  { title: "Film Stunt Design", image: filmStuntImg },
  { title: "Freestyle Nunchukus", image: nunchucksImg },
  { title: "Traditional Karla", image: karlaImg },
  { title: "Fun Fitness Activities", image: fitnessImg },
  { title: "Diet and Nutrition", image: dietImg }
];

const trainers = [
  { name: "Chief Trainer", focus: "Advanced Parkour and Coaching", image: trainerChief },
  { name: "Women Trainer", focus: "Strength and Inclusive Movement", image: trainerWomen },
  { name: "Body Building Trainer", focus: "Power, Endurance and Conditioning", image: trainerBody },
  { name: "Animal Flow Trainer", focus: "Mobility, Ground Flow and Agility", image: trainerAnimalFlow },
  { name: "Nunchucks Trainer", focus: "Freestyle Nunchukus Fundamentals", image: trainerNunchucks },
  { name: "Yoga Trainer", focus: "Breath, Balance and Flexibility", image: trainerYoga }
];

const stats = [
  { label: "Experience", target: 12, suffix: "+ Years" },
  { label: "Client Count", target: 2500, suffix: "+" },
  { label: "Trained Student Count", target: 6000, suffix: "+" }
];

const chooseReasons = [
  {
    title: "Highly Secured",
    description: "Secure training environment with top notch safety measures for peace of mind",
    icon: <FaShieldAlt />
  },
  {
    title: "Friendly Trainers",
    description: "Friendly, expert trainers guide your parkour, fitness and diet journey every step",
    icon: <FaUsers />
  },
  {
    title: "Get an Offer",
    description: "If you are a fan of Bruce Lee, Jackie chan and nunchuck get suited combo offers",
    icon: <FaGift />
  },
  {
    title: "Free Support",
    description: "Free personalised support helps you to choose the perfect program just for you",
    icon: <FaHeadset />
  }
];

const partners = [
  { name: "Way to Success", logo: partnerWayToSuccess },
  { name: "Dovyo", logo: partnerDovyo },
  { name: "Sevai", logo: partnerSevai },
  { name: "NIT", logo: partnerNit },
  { name: "Fit India", logo: partnerFitIndia },
  { name: "Wisdom", logo: partnerWisdom }
];

const testimonials = [
  {
    id: 1,
    name: "Chinnappan",
    role: "Parent and Supporter",
    quote:
      "This academy gave discipline, confidence, and fearless movement to our kids. The growth is visible in everyday life.",
    image: testimonialImg
  },
  {
    id: 2,
    name: "Testimonial Placeholder 2",
    role: "Member",
    quote: "Share your movement journey and transformation story here.",
    image: null
  },
  {
    id: 3,
    name: "Testimonial Placeholder 3",
    role: "Athlete",
    quote: "Share your experience with trainers, facilities, and support.",
    image: null
  },
  {
    id: 4,
    name: "Testimonial Placeholder 4",
    role: "Student",
    quote: "Share your progress journey and your favorite part of training.",
    image: null
  },
  {
    id: 5,
    name: "Testimonial Placeholder 5",
    role: "Fitness Enthusiast",
    quote: "Share your transformation in strength, confidence, and movement quality.",
    image: null
  }
];

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

const address =
  "67, phase, Chitrakoot enclave, No.66, 1&2, Vayalur Rd, ukt malai, MM Nagar, Tiruchirappalli, Tamil Nadu 620102";

const contactAddress =
  "67, phase, Chitrakoot enclave, No.66, 1&2, \nVayalur Rd, ukt malai, MM Nagar,\nTiruchirappalli, Tamil Nadu 620102";

const mapEmbed =
  "https://maps.google.com/maps?q=67%2C%20phase%2C%20Chitrakoot%20enclave%2C%20No.66%2C%201%262%2C%20Vayalur%20Rd%2C%20ukt%20malai%2C%20MM%20Nagar%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620102&output=embed";

const subscribeMailto =
  "mailto:traceurspark@gmail.com?subject=Subscribe%20to%20trichy%20parkour%20updates";

const BANNER_AUTO_SCROLL_MS = 5500;
const TEAM_TILES_PER_SCROLL = 3;
const TESTIMONIAL_AUTO_SCROLL_MS = 7000;

const getVisibleTeamCards = () => {
  if (typeof window === "undefined") {
    return TEAM_TILES_PER_SCROLL;
  }

  if (window.innerWidth <= 740) {
    return 1;
  }

  if (window.innerWidth <= 1060) {
    return 2;
  }

  return TEAM_TILES_PER_SCROLL;
};

function App() {
  const banners = [
    {
      image: banner1,
      alt: "Main banner image",
      title: "NO LIES: TRAIN, EAT, STRENGTHEN - DAILY",
      subtitle:
        "No fake promises! Not instant, but inevitable: move, train and strength will follow"
    },
    {
      image: banner2,
      alt: "Summer camp banner image",
      title: "SUMMER CAMP PLACEHOLDER TITLE",
      subtitle: "Placeholder subtitle for summer camp banner content"
    },
    {
      image: banner3,
      alt: "Action banner image",
      title: "ACTION BANNER PLACEHOLDER TITLE",
      subtitle: "Placeholder subtitle for action banner content"
    }
  ];

  const [activeBanner, setActiveBanner] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [teamIndex, setTeamIndex] = useState(0);
  const [visibleTeamCards, setVisibleTeamCards] = useState(getVisibleTeamCards);
  const [teamOffsetPx, setTeamOffsetPx] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [statsAnimationTick, setStatsAnimationTick] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const achievementsInViewRef = useRef(false);
  const achievementsSectionRef = useRef(null);
  const navLinksRef = useRef(null);
  const heroTouchStartX = useRef(null);
  const teamTrackRef = useRef(null);
  const teamTouchStartX = useRef(null);
  const testimonialTouchStartX = useRef(null);

  const maxTeamIndex = Math.max(0, trainers.length - visibleTeamCards);
  const statsDisplay = useMemo(
    () =>
      stats.map((stat, index) => {
        const value = animatedStats[index] ?? 0;
        const displayValue = value.toLocaleString("en-IN");
        return `${displayValue}${stat.suffix}`;
      }),
    [animatedStats]
  );

  const nextBanner = () => {
    setActiveBanner((previousBanner) => (previousBanner + 1) % banners.length);
  };

  const previousBanner = () => {
    setActiveBanner((previousBannerIndex) =>
      (previousBannerIndex - 1 + banners.length) % banners.length
    );
  };

  const handleHeroTouchStart = (event) => {
    heroTouchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleHeroTouchEnd = (event) => {
    const startX = heroTouchStartX.current;
    const endX = event.changedTouches[0]?.clientX;

    if (startX === null || typeof endX !== "number") {
      return;
    }

    const swipeDelta = startX - endX;
    const swipeThreshold = 45;

    if (Math.abs(swipeDelta) < swipeThreshold) {
      heroTouchStartX.current = null;
      return;
    }

    if (swipeDelta > 0) {
      nextBanner();
    } else {
      previousBanner();
    }

    heroTouchStartX.current = null;
  };

  const nextTeamPage = () => {
    setTeamIndex((previousIndex) => Math.min(previousIndex + 1, maxTeamIndex));
  };

  const previousTeamPage = () => {
    setTeamIndex((previousIndex) => Math.max(previousIndex - 1, 0));
  };

  const handleTeamTouchStart = (event) => {
    teamTouchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTeamTouchEnd = (event) => {
    const startX = teamTouchStartX.current;
    const endX = event.changedTouches[0]?.clientX;

    if (startX === null || typeof endX !== "number") {
      return;
    }

    const swipeDelta = startX - endX;
    const swipeThreshold = 45;

    if (Math.abs(swipeDelta) < swipeThreshold) {
      teamTouchStartX.current = null;
      return;
    }

    if (swipeDelta > 0) {
      nextTeamPage();
    } else {
      previousTeamPage();
    }

    teamTouchStartX.current = null;
  };

  const nextTestimonial = () => {
    setActiveTestimonial((previous) => (previous + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveTestimonial((previous) => (previous - 1 + testimonials.length) % testimonials.length);
  };

  const selectTestimonial = (index) => {
    setActiveTestimonial(index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTestimonialTouchStart = (event) => {
    testimonialTouchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTestimonialTouchEnd = (event) => {
    const startX = testimonialTouchStartX.current;
    const endX = event.changedTouches[0]?.clientX;

    if (startX === null || typeof endX !== "number") {
      return;
    }

    const swipeDelta = startX - endX;
    const swipeThreshold = 45;

    if (Math.abs(swipeDelta) < swipeThreshold) {
      testimonialTouchStartX.current = null;
      return;
    }

    if (swipeDelta > 0) {
      nextTestimonial();
    } else {
      previousTestimonial();
    }

    testimonialTouchStartX.current = null;
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleTeamCards(getVisibleTeamCards());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTeamIndex((previousIndex) => Math.min(previousIndex, maxTeamIndex));
  }, [maxTeamIndex]);

  useEffect(() => {
    const track = teamTrackRef.current;

    if (!track || track.children.length === 0) {
      setTeamOffsetPx(0);
      return;
    }

    const boundedIndex = Math.max(0, Math.min(teamIndex, maxTeamIndex));
    const targetCard = track.children[boundedIndex];
    setTeamOffsetPx(targetCard ? targetCard.offsetLeft : 0);
  }, [teamIndex, maxTeamIndex, visibleTeamCards]);

  useEffect(() => {
    const nav = navLinksRef.current;

    if (!nav) {
      return;
    }

    if (window.innerWidth > 740 || nav.scrollWidth <= nav.clientWidth) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const maxScrollLeft = nav.scrollWidth - nav.clientWidth;
      const nextLeft = nav.scrollLeft + nav.clientWidth;

      if (nextLeft >= maxScrollLeft - 2) {
        nav.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      nav.scrollTo({ left: nextLeft, behavior: "smooth" });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextBanner();
    }, BANNER_AUTO_SCROLL_MS);

    return () => clearTimeout(timer);
  }, [activeBanner, banners.length]);

  useEffect(() => {
    const section = achievementsSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !achievementsInViewRef.current) {
          achievementsInViewRef.current = true;
          setStatsAnimationTick((previous) => previous + 1);
          return;
        }

        if (!entry.isIntersecting) {
          achievementsInViewRef.current = false;
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setAnimatedStats(stats.map(() => 0));

    const durationMs = 1700;
    const startTime = performance.now();
    let frameId = 0;

    const animateCounters = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / durationMs, 1);
      setAnimatedStats(stats.map((stat) => Math.floor(stat.target * progress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(animateCounters);
      }
    };

    frameId = requestAnimationFrame(animateCounters);

    return () => cancelAnimationFrame(frameId);
  }, [statsAnimationTick]);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, TESTIMONIAL_AUTO_SCROLL_MS);

    return () => clearTimeout(timer);
  }, [activeTestimonial]);

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="support-bar">
          <div className="container support-bar-inner">
            <div className="support-links">
              <span className="support-label">Need Support:</span>
              <a href="tel:+919363503310">+91 9363503310</a>
              <a href="mailto:traceurspark@gmail.com">traceurspark@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="topbar">
          <div className="container topbar-inner">
            <a className="brand" href="#home">
              <img src={logo} alt="Traceurs Park logo" />
              <span>Traceurs Park</span>
            </a>
            <nav ref={navLinksRef} className="nav-links" aria-label="Main navigation">
              <a href="#home">Home</a>
              <a href="/about-us">About Us</a>
              <a href="#services">Our Services</a>
              <a href="#achievements">Achievements</a>
              <a href="/gallery">Gallery</a>
              <a href="/blog">Blog</a>
              <a href="/career">Career</a>
              <a href="/other-services">Other Services</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div
            className="hero-carousel"
            aria-label="Auto scrolling banner with three images"
            onTouchStart={handleHeroTouchStart}
            onTouchEnd={handleHeroTouchEnd}
          >
            <div
              className="hero-track"
              style={{ transform: `translateX(-${activeBanner * 100}%)` }}
              aria-live="polite"
            >
              {banners.map((banner, index) => (
                <article className="hero-slide" key={banner.alt} aria-hidden={index !== activeBanner}>
                  <img src={banner.image} alt={banner.alt} />
                  <div className="hero-overlay" />
                  <div className="hero-caption">
                    <h1>{banner.title}</h1>
                    <p>{banner.subtitle}</p>
                    <div className="hero-actions hero-actions-inline">
                      <a className="cta-btn" href="#contact">
                        Contact or Register
                      </a>
                      <a
                        className="ghost-btn"
                        href="https://www.instagram.com/traceurspark"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Follow Instagram
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <button
              className="banner-nav-btn left"
              type="button"
              aria-label="Previous banner"
              onClick={previousBanner}
            >
              <FaChevronLeft />
            </button>
            <button
              className="banner-nav-btn right"
              type="button"
              aria-label="Next banner"
              onClick={nextBanner}
            >
              <FaChevronRight />
            </button>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <h2 className="services-main-title">Our Services</h2>
              <p className="services-subtitle">Movement Programs Built for Real-World Strength</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <img src={service.image} alt={service.title} />
                  <div className="service-name-chip">{service.title}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={achievementsSectionRef} className="section best-section" id="achievements">
          <div className="container">
            <div className="section-head">
              <h2 className="achievements-main-title">Achievements</h2>
              <p className="achievements-subtitle">Built Through Consistency Since 2012</p>
            </div>
            <div className="stats-grid">
              {stats.map((item, index) => (
                <article className="stat-card" key={item.label}>
                  <div
                    className="stat-loader"
                    style={{ "--ring-progress": `${Math.min(((animatedStats[index] ?? 0) / item.target) * 100, 100)}%` }}
                    aria-hidden="true"
                  >
                    <div className="stat-loader-inner" />
                    <h3>{statsDisplay[index]}</h3>
                  </div>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container">
            <div className="section-head">
              <h2 className="team-main-title">Our Team</h2>
              <p className="team-subtitle">Dedicated Trainers for Every Movement Style</p>
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
                        <img src={trainer.image} alt={trainer.name} />
                        <div className="trainer-overlay-links" aria-label={`${trainer.name} social links`}>
                          <a href="#" aria-label={`${trainer.name} Instagram placeholder`}>
                            <FaInstagram />
                          </a>
                          <a href="#" aria-label={`${trainer.name} LinkedIn placeholder`}>
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                      <div className="trainer-body">
                        <h3>{trainer.name}</h3>
                        <p>{trainer.focus}</p>
                        <p className="placeholder-intro">
                          Placeholder intro: Add trainer bio, achievements, and coaching style.
                        </p>
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

        <section className="section why-choose-section">
          <div className="container">
            <div className="section-head">
              <h2 className="why-main-title">Why to Choose</h2>
              <p className="why-subtitle">Safe, Friendly and Athlete-Focused Environment</p>
              <p className="why-intro">Trichy parkour is the best movement training since 2012</p>
            </div>
            <div className="why-grid">
              {chooseReasons.map((reason) => (
                <article className="why-card" key={reason.title}>
                  <div className="why-icon">{reason.icon}</div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section testimonials-section"
          id="testimonials"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(12, 15, 20, 0.75), rgba(12, 15, 20, 0.58)), url(${testimonialsBg})`
          }}
        >
          <div className="container">
            <div className="section-head">
              <h2 className="testimonial-main-title">Our Testimonial</h2>
            </div>
            <div
              className="testimonials-carousel"
              onTouchStart={handleTestimonialTouchStart}
              onTouchEnd={handleTestimonialTouchEnd}
            >
              <div
                className="testimonials-track"
                aria-live="polite"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <article className="testimonial-card" key={item.id}>
                    <p className="quote">"{item.quote}"</p>
                  <div className="testimonial-head">
                    {item.image ? (
                      <img src={item.image} alt={item.name} />
                    ) : (
                      <div className="avatar-placeholder">{item.id}</div>
                    )}
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </article>
              ))}
              </div>
            </div>

            <div className="testimonial-dots" aria-label="Choose testimonial slide">
              {testimonials.map((item, index) => (
                <button
                  key={`testimonial-dot-${item.id}`}
                  type="button"
                  className={`testimonial-dot ${index === activeTestimonial ? "is-active" : ""}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeTestimonial}
                  onClick={() => selectTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="videos">
          <div className="container">
            <div className="section-head">
              <h2 className="youtube-main-title">YouTube Videos</h2>
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

        <section className="section" id="partners">
          <div className="container">
            <div className="section-head">
              <h2 className="partners-main-title">Partners</h2>
              <p className="partners-subtitle">Trusted by Brands and Community Leaders</p>
            </div>
            <div className="partners-grid">
              {partners.map((partner) => (
                <article className="partner-card" key={partner.name}>
                  <img src={partner.logo} alt={partner.name} />
                  <h3>{partner.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <article className="contact-card">
              <h2 className="contacts-main-title">Contact US</h2>
              <ul>
                <li>
                  <FaMapMarkerAlt />
                  <span className="contact-address-lines">{contactAddress}</span>
                </li>
                <li>
                  <MdEmail />
                  <a href="mailto:traceurspark@gmail.com">traceurspark@gmail.com</a>
                </li>
                <li>
                  <FaPhoneAlt />
                  <a href="tel:+919363503310">+91 9363503310</a>
                </li>
                <li>
                  <FaInstagram />
                  <a href="https://www.instagram.com/traceurspark" target="_blank" rel="noreferrer">
                    instagram.com/traceurspark
                  </a>
                </li>
                <li>
                  <FaFacebookF />
                  <a href="#" aria-label="Facebook placeholder">
                    facebook.com/traceurspark
                  </a>
                </li>
              </ul>
              <div className="contact-actions">
                <div className="contact-actions-stack">
                  <a className="cta-btn" href="https://maps.app.goo.gl/AgeMqVWusJUQKwkt8" target="_blank" rel="noreferrer">
                    Open Map Location
                  </a>
                  <a className="ghost-btn" href={subscribeMailto}>
                    Subscribe by Email
                  </a>
                </div>
                <div className="contact-mini-map" aria-label="Compact location map widget">
                  <iframe
                    title="Traceurs Park compact location map"
                    src={mapEmbed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </article>

            <article className="map-card" aria-label="Location map">
              <p className="eyebrow">Location Map</p>
              <iframe
                title="Traceurs Park location"
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <article>
            <img className="footer-logo" src={blackLogo} alt="Traceurs Park black logo" />
            <p>
              Trichy Parkour rose from the streets to the stars, Traceurs Park lights up Trichy
              like a sky full of bars to pull you up. From 2012 grind to today&apos;s grand scene,
              we turned struggle into strength and built a fearless movement machine. Trichy&apos;s
              first movement academy, where limits unfreeze - run, jump, fly, and move the way
              your soul agrees.
            </p>
          </article>

          <article>
            <h3>Quick Contact</h3>
            <p className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>{address}</span>
            </p>
            <p className="footer-contact-item">
              <MdEmail />
              <a href="mailto:traceurspark@gmail.com">traceurspark@gmail.com</a>
            </p>
            <p className="footer-contact-item">
              <FaPhoneAlt />
              <a href="tel:+919363503310">+91 9363503310</a>
            </p>
          </article>

          <article>
            <h3>Subscribe</h3>
            <p>
              Get monthly insights, academy milestones, and performance updates from Traceurs -
              your hub for disciplined fitness and movement excellence.
            </p>
            <a className="cta-btn subscribe-btn" href={subscribeMailto}>
              Subscribe Now
            </a>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook placeholder">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter placeholder">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/traceurspark" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn placeholder">
                <FaLinkedinIn />
              </a>
            </div>
          </article>
        </div>
        <div className="container">
          <p className="footer-rights">© 2026 Traceurs Park. All rights reserved.</p>
        </div>
      </footer>

      {showScrollTop ? (
        <button className="scroll-top-btn" type="button" aria-label="Scroll to top" onClick={scrollToTop}>
          <FaChevronUp />
        </button>
      ) : null}
    </div>
  );
}

export default App;