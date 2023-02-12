import React, {useEffect, useState} from 'react';
import searchArtistsStyle from './index.module.css';
import hotArtistsStyle from "../../HotArtists/hotArtists.module.css";
import ArtistCard from "./ArtistCard/ArtistCard";
import api from "../../../api";

const SearchArtists = ({searchedArtists}) => {

    return (
        <div className={searchArtistsStyle.main}>
            {searchedArtists.length ? <h2>Artists</h2> : ''}
            <div className={hotArtistsStyle.main}>
                {searchedArtists.map(artist=>
                    <ArtistCard artist={artist}/>
                )}
            </div>
        </div>
    );
};

export default SearchArtists;