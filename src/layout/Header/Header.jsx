import React from 'react';
import headerStyle from './index.module.css';
import logo from './logo.png'
import {Link} from "react-router-dom";
const Header = () => {
    const headerItems = [
        {title: 'Home', to: "/"},
        {title: 'Search', to: "/search"},
        {title: 'Live', to: "/live"},
        {title: 'Music', to: "/music"},
        {title: 'Charts', to: "/charts"},
        {title: 'Events', to: "/events"},
        {title: 'Features', to: "/features"},
    ]
    return (
        <header className={headerStyle.header}>
            <Link to="/"><img className={headerStyle.logo} src={logo} alt='logo'/></Link>
            <ul className={headerStyle.items}>
                {headerItems.map((h)=>
                    <li className={headerStyle.item}><Link to={h.to}>{h.title}</Link></li>
                )}
            </ul>
        </header>
    );
};

export default Header;