import React, {useEffect, useState} from 'react';
import api from "../../api";
import ArtistCard from "./ArtistCard/ArtistCard";
import hotArtistsStyle from './hotArtists.module.css';

const HotArtists = () => {

    const [hotArtists, setHotArtists] = useState([])

    async function getGenreByArtist(artistToFind){
        const {artist} = await api.getLastFmApi('artist.getInfo', {artist: artistToFind});
        return artist.tags.tag.map((tag) => tag.name).join(', ');
    }

    async function getHotArtists() {
        const {artists: serverHotArtists} = await api.getLastFmApi('chart.gettopartists', {limit: 12});

        const finalArtists = await Promise.all(
            (serverHotArtists.artist || []).map(async (artist) => {
            const tags = await getGenreByArtist(artist.name);
            return {
                name: artist.name,
                genre: tags,
                img: artist.image[4]['#text'],
            }
        }))

        setHotArtists([...finalArtists]);
    }

    useEffect(() => {
        getHotArtists()
    }, [])

    return (
        <div className={hotArtistsStyle.main}>
            {hotArtists.map(artist=>
                <ArtistCard artist={artist}/>
            )}
        </div>
    );
};

export default HotArtists;