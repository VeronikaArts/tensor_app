import React from 'react';
import trackCardStyle from './trackCard.module.css'

const TrackCard = ({track}) => {
    return (
        <div className={trackCardStyle.main}>
            <img className={trackCardStyle.img} src={track.img} alt={track.title}/>
            <div className={trackCardStyle.info}>
                <p className={trackCardStyle.title}>{track.title}</p>
                <p className={trackCardStyle.artist}>{track.artist}</p>
                <p className={trackCardStyle.genre}>{track.genre}</p>
            </div>

        </div>
    );
};

export default TrackCard;