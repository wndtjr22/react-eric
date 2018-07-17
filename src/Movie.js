import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

class Movie extends Component{
    render(){
        return (
            <div className="Movie">
                <div className="Movie__Columns">
                    <MoviePoster image={this.props.img} alt={this.props.alt}/>
                </div>
                <div className="Movie__Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre, index) => <MovieGenres genre={genre} key={index}/>)}
                    </div>
                    <div className="Movie__Synopsis">
                        {/*{this.props.synopsis}*/}
                        <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

function MovieGenres({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

class MoviePoster extends Component{
    render(){
        return(
            <img className="Movie__Poster" src={this.props.image} alt={this.props.alt} title={this.props.title}/>
        );
    }
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;
