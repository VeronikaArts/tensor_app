import React from 'react';
import headerStyle from './index.module.css';
import logo from './logo.png'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className={headerStyle.header}>
            <img className={headerStyle.logo} src={logo} alt='logo'/>
                <ul className={headerStyle.items}>
                    <li className={headerStyle.item}><Link to="/">Home</Link></li>
                    <li className={headerStyle.item}><Link to="search">Live</Link></li>
                    <li className={headerStyle.item}><Link to="search">Music</Link></li>
                    <li className={headerStyle.item}><Link to="search">Charts</Link></li>
                    <li className={headerStyle.item}><Link to="search">Events</Link></li>
                    <li className={headerStyle.item}><Link to="search">Features</Link></li>
                </ul>
        </header>
    );
};

export default Header;