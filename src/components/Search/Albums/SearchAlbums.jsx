import React from 'react';
import searchAlbumsStyle from './index.module.css';
import AlbumCard from "./AlbumCard/AlbumCard";

const SearchAlbums = ({searchedAlbums}) => {

    return (
        <div className={searchAlbumsStyle.main}>
            {searchedAlbums.length ? <h2>Albums</h2> : ''}
            <div className={searchAlbumsStyle.table}>
                {searchedAlbums.map(album=>
                    <AlbumCard album={album}/>
                )}
            </div>
        </div>
    );
};

export default SearchAlbums;