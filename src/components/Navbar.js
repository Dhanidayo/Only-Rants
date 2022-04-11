import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isDarkModeActive, setIsDarkModeActive] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const switchModes = (mode) => {
        if (mode === "light") {
            setIsDarkModeActive(false);
        } else if (mode === "dark") {
            setIsDarkModeActive(true);
        }
    }

    return (
        <nav className={isDarkModeActive ? "navbar dark-navbar" : "navbar light-navbar"}>
            <Link to="/">
                <h1>Only Rants</h1>
            </Link>
            { isLoggedIn ? (
                <>
                    <div className="links">
                        <NavLink exact activeclassname="active" to="/Login">Login</NavLink>
                        <NavLink exact activeclassname="active" to="/Register">Register</NavLink>
                        <div className={isDarkModeActive ? "toggle-dark" : "toggle-light"}>
                            <h4 className="light-mode" onClick={() => switchModes("light")}>
                                L
                            </h4>
                            <h4 className="dark-mode" onClick={() => switchModes("dark")}>
                                D
                            </h4>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="links">
                    <NavLink exact activeclassname="active" to="/">Home</NavLink>
                    <NavLink activeclassname="active" to="/create">New Blog</NavLink>
                    </div>
                    <div className={isDarkModeActive ? "toggle-dark" : "toggle-light"}>
                        <h4 className="light-mode" onClick={() => switchModes("light")}>
                            L
                        </h4>
                        <h4 className="dark-mode" onClick={() => switchModes("dark")}>
                            D
                        </h4>
                    </div>
                </>
            )}
        </nav>
    );
}
 
export default Navbar;