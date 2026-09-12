import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import "./Technologies.css";

function Technologies() {
  return (
    <section id="technologies" className="technologies section">
      <div className="container">
        <div className="technologies__header">
          <div>
            <span className="technologies__eyebrow">
              Explore Technologies
            </span>

            <h2 className="technologies__title">
              Build Your
              <span className="gradient-text">
                {" "}
                Development Stack
              </span>
            </h2>

            <p className="technologies__description">
              Explore popular technologies and choose the tools
              that fit your next project.
            </p>
          </div>
        </div>

        <div className="technologies__layout">
          <div className="technologies__grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>

          <YourStack />
        </div>
      </div>
    </section>
  );
}

export default Technologies;