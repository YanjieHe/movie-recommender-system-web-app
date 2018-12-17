import React, {Component} from 'react';

import summaries from './summaries.json'
import movie_names from './movie_names.json'

import './App.css'

class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.id = props.id
    }

    render() {
        return (
            <div className="card">
                <img alt={movie_names[this.id].title + " Poster"} title={movie_names[this.id].title + " Poster"}
                     width="100%"
                     src={"https://raw.githubusercontent.com/YanjieHe/movie-recommender-system-web-app/master/src/images/" + this.id + ".jpg"}/>
                <div className="container">
                    <h4><b>{movie_names[this.id].title}</b></h4>
                    <h5><b>genres: </b>{movie_names[this.id].genres.join(", ")}</h5>
                    <p>{summaries[this.id]}</p>
                </div>
            </div>
        );
    }
}

export default Movie;