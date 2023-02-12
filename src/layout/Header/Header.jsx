import React from 'react';
import headerStyle from './index.module.css';
import logo from './logo.png'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className={headerStyle.header}>
            <Link to="/"><img className={headerStyle.logo} src={logo} alt='logo'/></Link>
            <ul className={headerStyle.items}>
                <li className={headerStyle.item}><Link to="/">Home</Link></li>
                <li className={headerStyle.item}><Link to="/search">Search</Link></li>
                <li className={headerStyle.item}><Link to="/live">Live</Link></li>
                <li className={headerStyle.item}><Link to="/music">Music</Link></li>
                <li className={headerStyle.item}><Link to="/charts">Charts</Link></li>
                <li className={headerStyle.item}><Link to="/events">Events</Link></li>
                <li className={headerStyle.item}><Link to="/features">Features</Link></li>
            </ul>
        </header>
    );
};

export default Header;