import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from './context';

const SingleMovie = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [movie, setMovie] = useState("");

    const getMovies = async (url) => {
        setIsLoading(true);
        setIsError(false);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setMovie(data);
                setIsLoading(false);
            } else {
                setIsError(true);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`);
        }, 500);

        return () => clearTimeout(timerOut);
    }, [id]);

    if (isLoading) {
        return (
            <div className='movie-section'>
                <div className='loading'>Loading...</div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className='movie-section'>
                <div className='error'>Something went wrong...</div>
            </div>
        );
    }

    return (
        <section className='movie-section'>
            <div className='movie-card'>
                <figure  >
                    <img src={movie.Poster} alt={movie.Title} />
                </figure>
                <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>

                </div>
        </section>
    );
};

export default SingleMovie;
