import "../styles/stats.css";

const Stats = ({ planet }) => (
    <div className="stats">
        <div className="stat">
            <h3>Rotation Time</h3>
            <p>{planet.rotation}</p>
        </div>
        <div className="stat">
            <h3>Revolution Time</h3>
            <p>{planet.revolution}</p>
        </div>
        <div className="stat">
            <h3>Radius</h3>
            <p>{planet.radius}</p>
        </div>
        <div className="stat">
            <h3>Average Temp.</h3>
            <p>{planet.temperature}</p>
        </div>
    </div>
);

export default Stats;