import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className="header">
            <h1>The Planets</h1>
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                {planets.map((planet) => (
                    <NavLink to={`/planet/${planet.toLowerCase()}`} key={planet} onClick={() => setMenuOpen(false)}>
                        {planet}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;
