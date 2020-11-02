import React from 'react';

const ListMovies = (props) => {
    const {removeMovieFromList, addToSeen, movies} = props;
    return (
            <div className="movie-list" >
                <img className="movie-poster" src={movies.posterImg} alt='movie poster' onClick={()=>addToSeen(movies.id)}/>
                <p>{movies.title}, {movies.year} <br></br>
                {movies.genre}</p>
                <button className="delete-button" type="button" onClick={()=>removeMovieFromList(movies.id)}> X </button>
            </div>
        
    )
}

export default ListMovies