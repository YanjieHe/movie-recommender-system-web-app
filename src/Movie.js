import React, {Component} from 'react';

import summaries from './summaries.json'
import movie_names from './movie_names.json'

import './App.css'
import './bootstrap.min.css'

class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.id = props.id
    }

    render() {
        return (
            <div class="card mb-3" style={{"max-width": "15rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{movie_names[this.id].title}</h5>
                    <h6 class="card-subtitle text-muted">genres: {movie_names[this.id].genres.join(", ")}</h6>
                </div>
                <img
                     alt={movie_names[this.id].title + " Poster"} title={movie_names[this.id].title + " Poster"}
                     src={"https://raw.githubusercontent.com/YanjieHe/movie-recommender-system-web-app/master/src/images/" + this.id + ".jpg"}/>
                <div class="card-body">
                    <p class="card-text">{summaries[this.id]}</p>
                </div>
            </div>
        );
    }
}

export default Movie;