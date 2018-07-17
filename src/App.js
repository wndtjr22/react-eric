import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import _ from 'lodash'

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  state = {};

  componentDidMount(){
    this._getMovies();
  };

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie
          key={movie.id}
          title={movie.title_english}
          img={movie.medium_cover_image}
          alt={movie.title_english}
          genres={movie.genres}
          synopsis={movie.synopsis}
      />
    });
    return movies
  };

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
        movies
    })
  };

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count&page=1')
        .then(resp => resp.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err));
  };

  render() {
    const { movies } = this.state;
    return (
        <div className={movies? "App" : "App--loading"}>
            {movies ? this._renderMovies() : "Loading"}
        </div>
    );
  }
}

export default App;
