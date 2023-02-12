import React from 'react';
import searchArtistsStyle from './index.module.css';
import ArtistCard from "./ArtistCard/ArtistCard";

const SearchArtists = ({searchedArtists}) => {

    return (
        <div className={searchArtistsStyle.main}>
            {searchedArtists.length ? <h2>Artists</h2> : ''}
            <div className={searchArtistsStyle.table}>
                {searchedArtists.map(artist=>
                    <ArtistCard artist={artist}/>
                )}
            </div>
        </div>
    );
};

export default SearchArtists;