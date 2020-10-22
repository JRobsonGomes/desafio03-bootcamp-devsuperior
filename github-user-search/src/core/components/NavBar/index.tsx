import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const NavBar = () => (
    <nav className="row main-nav">
        <Link to="/">
            <h4 className="title-main-menu">Bootcamp DevSuperior</h4>
        </Link>
    </nav>
);

export default NavBar;