import React from 'react';
import trackCardStyle from './trackCard.module.css'

const TrackCard = ({track}) => {
    return (
        <div className={trackCardStyle.main}>
            <img className={trackCardStyle.img} src={track.img} alt={track.artist}/>
            <div className={trackCardStyle.info}>
                <p className={trackCardStyle.title}>{track.name}</p>
                <p className={trackCardStyle.subtitle}>{track.artist}</p>
            </div>
        </div>
    );
};

export default TrackCard;