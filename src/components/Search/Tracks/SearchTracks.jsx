import React from 'react';
import searchTracksStyle from './index.module.css';
import TrackCard from "./TrackCard/TrackCard";

const SearchTracks = ({searchedTracks}) => {

    return (
        <div className={searchTracksStyle.main}>
            {searchedTracks.length ? <h2>Tracks</h2> : ''}
            <div className={searchTracksStyle.table}>
                {searchedTracks.map(track=>
                    <TrackCard track={track}/>
                )}
            </div>
        </div>
    );
};

export default SearchTracks;