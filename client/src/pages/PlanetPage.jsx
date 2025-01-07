import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPlanets } from "../api";
import Tabs from "../components/Tabs.jsx";
import Stats from "../components/Stats.jsx";
import "../styles/planet.css";

const PlanetPage = () => {
  const { name } = useParams();
  const [planet, setPlanet] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const getPlanet = async () => {
      try {
        const planets = await fetchPlanets();
        const selectedPlanet = planets.find(
          (p) => p.name.toLowerCase() === name.toLowerCase()
        );
        setPlanet(selectedPlanet || null);
      } catch (err) {
        console.error("Failed to fetch planets:", err);
      }
    };
    getPlanet();
  }, [name]);

  if (!planet) return <p>Loading...</p>;

  const getTabContent = () => {
    if (activeTab === "overview") return planet.overview.content;
    if (activeTab === "structure") return planet.structure.content;
    if (activeTab === "geology") return planet.geology.content;
  };

  const getTabImage = () => {
    if (activeTab === "overview") return planet.images.planet;
    if (activeTab === "structure") return planet.images.internal;
    if (activeTab === "geology") return planet.images.geology;
  };

  return (
    <div className="planet-page">
      <div className="planet-image">
        <img src={getTabImage()} alt={`${planet.name} ${activeTab}`} />
      </div>
      <div className="planet-content">
        <h2>{planet.name}</h2>
        <p>{getTabContent()}</p>
        <a href={planet[activeTab]?.source} target="_blank" rel="noopener noreferrer">
          Source
        </a>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
      </div>
      <Stats planet={planet} />
    </div>
  );
};

export default PlanetPage;
