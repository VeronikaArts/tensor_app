import React, {useEffect, useState} from 'react';
import searchPageStyle from './index.module.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchArtists from "../../components/Search/Artists/SearchArtists";
import api from "../../api";
import SearchAlbums from "../../components/Search/Albums/SearchAlbums";
import SearchTracks from "../../components/Search/Tracks/SearchTracks";

const SearchPage = () => {
    const [searchedArtists, setSearchedArtists] = useState([]);
    const [searchedAlbums, setSearchedAlbums] = useState([]);
    const [searchedTracks, setSearchedTracks] = useState([]);

    async function getArtists(value) {
        const {results: artists} = await api.getLastFmApi('artist.search', { artist: value});

        const finalArtists = (artists?.artistmatches?.artist || []).map((a) => ({
            name: a.name,
            listeners: a.listeners,
            img: a.image[2]['#text']
        }));

        setSearchedArtists([...finalArtists])
    }

    async function getAlbums(value) {
        const {results: albums} = await api.getLastFmApi('album.search', { album: value});

        const finalAlbums = (albums?.albummatches?.album || []).map((a) => ({
            name: a.name,
            artist: a.artist,
            img: a.image[2]['#text']
        }));

        setSearchedAlbums([...finalAlbums])
    }

    async function getTracks(value) {
        const {results: tracks} = await api.getLastFmApi('track.search', { track: value});

        const finalTracks = (tracks?.trackmatches?.track || []).map((track) => ({
            name: track.name,
            artist: track.artist,
            img: track.image[2]?.['#text']
        }));

        setSearchedTracks([...finalTracks])
    }

    async function toSearch(value){
        await getArtists(value);
        await getAlbums(value);
        await getTracks(value);
    }

    return (
        <main className={searchPageStyle.main}>
            <h1>SEARCH</h1>
            <SearchForm toSearch={toSearch}/>
            <SearchArtists searchedArtists={searchedArtists}/>
            <SearchAlbums searchedAlbums={searchedAlbums}/>
            <SearchTracks searchedTracks={searchedTracks}/>
        </main>
    );
};

export default SearchPage;