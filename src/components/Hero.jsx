import bannerImage from "../assets/banner-stack.png";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        {/* Hero Content */}
        <div className="hero__content">
          <h1 className="hero__title">
            <span>Build Your Ideal</span>
            <span className="hero__gradient-title">
              Development Stack
            </span>
          </h1>

          <p className="hero__description">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="hero__actions">
            <a
              href="#technologies"
              className="primary-btn hero__primary-btn"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="secondary-btn hero__secondary-btn"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero__image-wrapper">
          <img
            src={bannerImage}
            alt="Development technology stack illustration"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;