import { useEffect, useMemo, useRef, useState } from "react";

const carouselImageImports = import.meta.glob(
  "../imgs/gallery/carousel/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);

const scrollImageImports = import.meta.glob(
  "../imgs/gallery/scroll/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
);

const getLabelFromPath = (filePath) => {
  const fileName = filePath.split("/").at(-1) || "gallery-image";

  return fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const toSortedImageList = (imagesMap) =>
  Object.entries(imagesMap)
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    )
    .map(([filePath, src], index) => ({
      id: `${filePath}-${index}`,
      src,
      alt: getLabelFromPath(filePath)
    }));

const THUMB_SIZE_VARIANTS = ["is-wide", "is-tall", "is-square"];

export default function Gallery() {
  const scrollBandRef = useRef(null);
  const resumeAutoplayTimeoutRef = useRef(null);
  const carouselImages = useMemo(
    () => toSortedImageList(carouselImageImports),
    []
  );
  const scrollImages = useMemo(() => toSortedImageList(scrollImageImports), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pauseAutoplay, setPauseAutoplay] = useState(false);
  const [isScrollAutoplayPaused, setIsScrollAutoplayPaused] = useState(false);

  useEffect(() => {
    if (!carouselImages.length || pauseAutoplay) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [carouselImages.length, pauseAutoplay]);

  useEffect(() => {
    if (!carouselImages.length) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex((prevIndex) => prevIndex % carouselImages.length);
  }, [carouselImages.length]);

  useEffect(() => {
    const scrollBandElement = scrollBandRef.current;

    if (!scrollBandElement) {
      return undefined;
    }

    const resumeAfterIdle = () => {
      if (resumeAutoplayTimeoutRef.current) {
        window.clearTimeout(resumeAutoplayTimeoutRef.current);
      }

      resumeAutoplayTimeoutRef.current = window.setTimeout(() => {
        setIsScrollAutoplayPaused(false);
      }, 650);
    };

    const pauseOnManualInteraction = () => {
      setIsScrollAutoplayPaused(true);
      resumeAfterIdle();
    };

    const forceScrollByClick = (event) => {
      const bounds = scrollBandElement.getBoundingClientRect();
      const clickX = event.clientX - bounds.left;
      const scrollStep = Math.max(220, Math.round(bounds.width * 0.45));
      const shouldScrollRight = clickX >= bounds.width / 2;

      pauseOnManualInteraction();
      scrollBandElement.scrollBy({
        left: shouldScrollRight ? scrollStep : -scrollStep,
        behavior: "smooth"
      });
    };

    const handleWheelScroll = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      event.preventDefault();
      scrollBandElement.scrollLeft += event.deltaY;
    };

    scrollBandElement.addEventListener("wheel", handleWheelScroll, {
      passive: false
    });
    scrollBandElement.addEventListener("click", forceScrollByClick);

    return () => {
      scrollBandElement.removeEventListener("wheel", handleWheelScroll);
      scrollBandElement.removeEventListener("click", forceScrollByClick);

      if (resumeAutoplayTimeoutRef.current) {
        window.clearTimeout(resumeAutoplayTimeoutRef.current);
      }
    };
  }, []);

  const activeImage = carouselImages[activeIndex] || null;

  const handlePrevious = () => {
    if (!carouselImages.length) {
      return;
    }

    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const handleNext = () => {
    if (!carouselImages.length) {
      return;
    }

    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  return (
    <section className="section gallery-page">
      <div className="container">
        <div className="gallery-head">
          <h1 className="gallery-title">Gallery</h1>
          <p className="gallery-subtitle">
            Hover a frame to open it in full view, then explore more moments in the
            moving strip below.
          </p>
        </div>

        {activeImage ? (
          <div
            className="gallery-fixed-carousel"
            onMouseEnter={() => setPauseAutoplay(true)}
            onMouseLeave={() => setPauseAutoplay(false)}
          >
            <div className="gallery-main-frame">
              <img
                key={activeImage.id}
                src={activeImage.src}
                alt={activeImage.alt}
                className="gallery-main-image"
              />
              <div className="gallery-main-overlay">
                <h3>{activeImage.alt}</h3>
              </div>
            </div>

            <div className="gallery-thumb-carousel" role="list" aria-label="Gallery image list">
              {carouselImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className={`gallery-thumb-card ${THUMB_SIZE_VARIANTS[index % THUMB_SIZE_VARIANTS.length]} ${
                    index === activeIndex ? "is-active" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  aria-label={`Open ${image.alt}`}
                  aria-pressed={index === activeIndex}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
              ))}
            </div>

            <div className="gallery-fixed-controls">
              <button type="button" className="gallery-control-btn" onClick={handlePrevious}>
                Prev
              </button>
              <button type="button" className="gallery-control-btn" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="gallery-empty-state">
            <h3>No carousel images found</h3>
            <p>
              Add images inside imgs/gallery/carousel to show them in the fixed
              carousel.
            </p>
          </div>
        )}

        {scrollImages.length ? (
          <div
            className="gallery-scroll-band"
            aria-label="Scrolling gallery images"
            ref={scrollBandRef}
          >
            <div className={`gallery-scroll-track ${isScrollAutoplayPaused ? "is-paused" : ""}`}>
              {[...scrollImages, ...scrollImages].map((image, index) => (
                <div className="gallery-scroll-item" key={`${image.id}-${index}`}>
                  <span className="gallery-scroll-index">
                    {(index % scrollImages.length) + 1}
                  </span>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
