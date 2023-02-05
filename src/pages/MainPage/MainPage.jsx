import React from 'react';
import mainPageStyle from './index.module.css';
import HotArtists from "../../components/HotArtists/HotArtists";
import PopularTracks from "../../components/PopularTracks/PopularTracks";

const Main = () => {
    return (
        <div className={mainPageStyle.main}>
            <h1>MUSIC</h1>
            <h2>Hot right now</h2>
            <hr className={mainPageStyle.mainLine}/>
            <HotArtists/>
            <h2>Popular tracks</h2>
            <hr className={mainPageStyle.mainLine}/>
            <PopularTracks/>
        </div>
    );
};

export default Main;