let movies = require('./initialmovies.json');
let id = movies[movies.length - 1].id + 1;

module.exports = {
    getMovie: (req, res) => {
        res.status(200).send(movies)
    },
    addMovie: (req, res) => {
        let {title, year, genre, posterImg} = req.body;
        let newMovie = {
            id,
            title,
            year,
            genre,
            posterImg,
            seen: false
        };
        movies.push(newMovie);
        id++;
        res.status(200).send(movies);
    },
    updateMovie: (req, res) => {
        let index = movies.findIndex(movie => movie.id === +req.params.id);
        if(index === -1){
            return res.status(400).send('Movie not found')
        }
        movies[index].seen = true
        res.status(200).send(movies)
    },
    removeWatchListMovie: (req, res) => {
        let index = movies.findIndex(movie => movie.id === +req.params.id);
        if(index === -1){
            return res.status(400).send('Movie not found')
        }
        movies.splice(index, 1);
        res.status(200).send(movies)
    },
    removeWatchedMovie: (req, res) => {
        let index = movies.findIndex(movie => movie.id === +req.params.id);
        if(index === -1){
            return res.status(400).send('Movie not found')
        }
        movies.splice(index, 1);
        res.status(200).send(movies)
    }
}