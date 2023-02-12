import React from 'react';
import artistCardStyle from './artistCard.module.css'

const ArtistCard = ({artist}) => {
    return (
        <div className={artistCardStyle.main}>
            <img className={artistCardStyle.img} src={artist.img} alt={artist.name}/>
            <div className={artistCardStyle.info}>
                <p className={artistCardStyle.title}>{artist.name}</p>
                <span className={artistCardStyle.listeners}>{artist.listeners} listeners</span>
            </div>
        </div>
    );
};

export default ArtistCard;