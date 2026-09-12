import "./YourStack.css";

function YourStack({ selectedTechnologies }) {
  return (
    <aside className="your-stack">
      <div className="your-stack__header">
        <div>
          <h2 className="your-stack__title">
            Your Stack
          </h2>

          <p className="your-stack__count">
            {selectedTechnologies.length} Technology Selected
          </p>
        </div>
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="your-stack__empty">
          <div className="your-stack__empty-icon">
            +
          </div>

          <h3>No technologies added yet</h3>

          <p>
            Add technologies from the list to build your
            development stack.
          </p>
        </div>
      ) : (
        <div className="your-stack__items">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="your-stack__item"
            >
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="your-stack__item-icon"
              />

              <div className="your-stack__item-info">
                <h3>{technology.name}</h3>
                <span>{technology.category}</span>
              </div>

              <button
                type="button"
                className="your-stack__remove"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        className="your-stack__remove-all"
        disabled={selectedTechnologies.length === 0}
      >
        Remove All
      </button>
    </aside>
  );
}

export default YourStack;