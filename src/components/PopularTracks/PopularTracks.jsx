import React, {useEffect, useState} from 'react';
import api from "../../api";
import TrackCard from "./TrackCard/TrackCard";
import popularTracksStyle from './popularTracks.module.css';

const PopularTracks = () => {

    const [popularTracks, setPopularTracks] = useState([])

    async function getGenreByArtist(artistToFind){
        const {artist} = await api.getLastFmApi('artist.getInfo', {artist: artistToFind});
        return artist.tags.tag.map((tag) => tag.name).join(', ');
    }

    async function getPopularTracks() {
        const {tracks: serverTracks} = await api.getLastFmApi('chart.gettoptracks', {limit: 18});

        const finalPopularTracks = await Promise.all(
            serverTracks.track.map(async (track) => {
            const tags = await getGenreByArtist(track.artist.name);
            return {
                title: track.name,
                img: track.image[3]['#text'],
                artist: track.artist.name,
                genre: tags,
            }
        }))

        setPopularTracks([...finalPopularTracks])
    }
    useEffect(() => {
        getPopularTracks()
    }, [])

    return (
        <div className={popularTracksStyle.main}>
            {popularTracks.map(track=>
                <TrackCard track={track}/>
            )}
        </div>
    );
};

export default PopularTracks;