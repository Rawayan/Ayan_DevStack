import "./TechnologyCard.css";

function TechnologyCard({ technology, isAdded, onAdd }) {
  const handleAddClick = () => {
    onAdd(technology);
  };

  return (
    <article className="technology-card">
      <div className="technology-card__top">
        <div className="technology-card__icon-wrapper">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="technology-card__icon"
          />
        </div>

        <span className="technology-card__badge">
          {technology.badge}
        </span>
      </div>

      <div className="technology-card__content">
        <h3 className="technology-card__name">
          {technology.name}
        </h3>

        <p className="technology-card__description">
          {technology.description}
        </p>

        <div className="technology-card__meta">
          <span className="technology-card__category">
            {technology.category}
          </span>

          <span className="technology-card__difficulty">
            {technology.difficulty}
          </span>
        </div>

        <div className="technology-card__bottom">
          <div className="technology-card__rating">
            <span className="technology-card__star">★</span>
            <span>{technology.rating}</span>
          </div>

          <span className="technology-card__rating-label">
            Rating
          </span>
        </div>

        <button
          type="button"
          className={`technology-card__button ${
            isAdded ? "technology-card__button--added" : ""
          }`}
          onClick={handleAddClick}
          disabled={isAdded}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;