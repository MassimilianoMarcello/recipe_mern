import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';

import './Navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('_id')) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">Recipes</NavLink>
                </li>
                {!isLoggedIn ? (
                    <>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to="/logout">Logout</NavLink>
                        </li>
                        <li>
                            <NavLink to="/add">Add Recipe</NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;