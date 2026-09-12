import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import "./Technologies.css";

function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data.");
        }

        const data = await response.json();

        setTechnologies(data);
      } catch (error) {
        setError("Unable to load technologies. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (technologyId) => {
    const technologyToRemove = selectedTechnologies.find(
      (technology) => technology.id === technologyId
    );

    setSelectedTechnologies((currentStack) =>
      currentStack.filter(
        (technology) => technology.id !== technologyId
      )
    );

    if (technologyToRemove) {
      toast.info(`${technologyToRemove.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

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

        {loading && (
          <div className="technologies__loading">
            <div className="technologies__spinner"></div>
            <p>Loading technologies...</p>
          </div>
        )}

        {!loading && error && (
          <div className="technologies__error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="technologies__layout">
            <div className="technologies__grid">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={selectedTechnologies.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            <YourStack
              selectedTechnologies={selectedTechnologies}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </section>
  );
}

export default Technologies;