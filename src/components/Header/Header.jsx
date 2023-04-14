import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/review'}>Review</Link>
            <Link to={'/order'}>Order</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contacts</Link>
        </nav>
    );
};

export default Header;