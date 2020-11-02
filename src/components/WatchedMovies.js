import React from 'react';

const WatchedMovies = (props) => {
    const {removeMovieFromSeenList, movies} = props;
    return (
            <div className="seen-movie-list" >
                <img className="movie-poster" src={movies.posterImg} alt='movie poster' />
                <p>{movies.title}, {movies.year} <br></br>
                {movies.genre}</p>
                <button className="delete-button" type="button" onClick={()=>removeMovieFromSeenList(movies.id)}> X </button>
            </div>
        
    )
}

export default WatchedMovies