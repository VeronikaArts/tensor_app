import React from 'react';
import albumCardStyle from './albumCard.module.css'

const AlbumCard = ({album}) => {
    return (
        <div className={albumCardStyle.main}>
            <img className={albumCardStyle.img} src={album.img} alt={album.artist}/>
            <div className={albumCardStyle.info}>
                <p className={albumCardStyle.title}>{album.name}</p>
                <p className={albumCardStyle.subtitle}>{album.artist}</p>
            </div>
        </div>
    );
};

export default AlbumCard;