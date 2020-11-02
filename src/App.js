import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import WantToWatch from './components/WantToWatch'
import WatchedMovies from './components/WatchedMovies'
import axios from 'axios'
import ListMovies from './components/ListMovies'

class App extends Component {
  constructor(){
    super();

    this.state = {
      watchlist: [],
      seenList: []
    }
  }

  componentDidMount(){
    axios
    .get('/api/watchlist')
    .then((res)=> {
      const watched = res.data.filter(e => !e.seen)
      const seen = res.data.filter(e => e.seen)
      this.setState({ watchlist: watched, seenList: seen })
    })
    .catch((err)=> console.log(err))
  }

  addMovie = (title, year, genre, posterImg) => {
    axios
    .post('/api/watchlist', {title, year, genre, posterImg})
    .then(res => {
      const watched = res.data.filter(e => !e.seen)
      const seen = res.data.filter(e => e.seen)
      this.setState({watchlist: watched, seenList: seen})
    })
    .catch(err => console.log(err))
  }


  removeMovieFromList = (id) => {
    axios.delete(`/api/watchlist/${id}`)
    .then(res => {
      const watched = res.data.filter(e => !e.seen)
      const seen = res.data.filter(e => e.seen)
      this.setState({watchlist: watched, seenList: seen})
    })
    .catch(err=>console.log(err))
  }

  removeMovieFromSeenList = (id) => {
    axios.delete(`/api/seenlist/${id}`)
    .then(res => {
      const watched = res.data.filter(e => !e.seen)
      const seen = res.data.filter(e => e.seen)
      this.setState({watchlist: watched, seenList: seen})
    })
    .catch(err => console.log(err))
  }

  addToSeen = (id) => {
    axios.put(`/api/watchlist/${id}`).then(res => {
      const watched = res.data.filter(e => !e.seen)
      const seen = res.data.filter(e => e.seen)
      this.setState({watchlist: watched, seenList: seen})
    })
    .catch(err => console.log(err))
  }

  render(){
    const moviesMap = this.state.watchlist.map(e => {
      return <ListMovies className="left" removeMovieFromList={this.removeMovieFromList} 
      addToSeen={this.addToSeen} key={e.id} movies={e} />
    })
    const seenMoviesMap = this.state.seenList.map(e => {
      return <WatchedMovies className="right" removeMovieFromSeenList={this.removeMovieFromSeenList} 
      addToSeen={this.addToSeen} key={e.id} movies={e} />
    })
    return (
      <div className="App">
        <Header/>
        <WantToWatch addMovie={this.addMovie}/>
        <h2 className="title">Movies I Want To Watch: </h2>
        <h2 className="title" id="seen-header">Movies I Have Seen: </h2>  
        <div className="left" id="want-to-watch">{moviesMap}</div>
        <div className="right" id="seen-movies">{seenMoviesMap}</div>
      </div>
    );
  }
}


export default App;
