import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original";
const videoIdList = ["eHp3MbsCbMg", "aWzlQ2N6qqg", "x7Krla_UxRg", "8YjFbMbfXaQ", "JfVOs4VSpmA"]

const Row = ({ title, isLargeRow, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const getVideoId = () => {
        const rand = Math.floor(Math.random() * (videoIdList.length))
        return rand;
    }

    const handleClick = () => {
        if(trailerUrl) {
            setTrailerUrl("");
        } else {
            const url = videoIdList[getVideoId()]
            setTrailerUrl(url);
        }
    }

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick()}
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={`${trailerUrl}`} opts={opts} />}
        </div>
    )
}

export default Row