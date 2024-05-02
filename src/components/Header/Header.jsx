import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                    end
                >
                    Home
                </NavLink>
                <NavLink
                   to="/movies"
                   className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                >
                    Movies
                </NavLink>
            </nav>
        </header>
    );
};