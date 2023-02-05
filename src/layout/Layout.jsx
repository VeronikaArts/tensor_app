import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";
import layoutStyles from './index.module.css'

const Layout = () => {
    return (
        <>
            <Header/>
            <main className={layoutStyles.content}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;