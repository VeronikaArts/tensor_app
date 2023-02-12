import React, {useEffect, useState} from 'react';
import searchPageStyle from './index.module.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchArtists from "../../components/Search/Artists/SearchArtists";
import api from "../../api";

const SearchPage = () => {
    const [searchedArtists, setSearchedArtists] = useState([]);

    async function getArtists(value) {
        const {results: artists} = await api.getLastFmApi('artist.search', { artist: value});

        const finalArtists = (artists?.artistmatches?.artist || []).map((a) => ({
            name: a.name,
            listeners: a.listeners,
            img: a.image[2]['#text']
        }));

        setSearchedArtists([...finalArtists])
    }

    async function toSearch(value){
        await getArtists(value);
    }

    return (
        <main className={searchPageStyle.main}>
            <h1>SEARCH</h1>
            <SearchForm toSearch={toSearch}/>
            <SearchArtists searchedArtists={searchedArtists}/>
        </main>
    );
};

export default SearchPage;