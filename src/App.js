import React, {Component} from 'react';
import summaries from './summaries.json'
import movie_names from './movie_names.json'
import neighbours from './neighbours.json'
import './App.css'
import Movie from "./Movie.js"

class App extends Component {

    constructor(props) {
        super(props)
        this.recommend = this.recommend.bind(this)
        this.myClick = this.myClick.bind(this)
        var index = Math.floor(Math.random() * Object.keys(movie_names).length)
        var movies_id = Object.keys(movie_names)
        var imdb_id = movies_id[index]
        var movies = []
        movies.push(imdb_id)
        movies = movies.concat(neighbours[imdb_id])
        this.state = {movie_list: movies}
    }

    myClick() {
        var index = Math.floor(Math.random() * Object.keys(movie_names).length)
        var movies_id = Object.keys(movie_names)
        var imdb_id = movies_id[index]
        this.recommend(imdb_id)
    }

    recommend(imdb_id) {
        var movies = []
        movies.push(imdb_id)
        movies = movies.concat(neighbours[imdb_id])
        this.setState({movie_list: movies})
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            {new Movie({id: this.state.movie_list[0]}).render()}
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.myClick}>
                                Randomly recommend me some movies!
                            </button>
                        </td>
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary">Previous</button>
                                <button type="button" className="btn btn-secondary">Middle</button>
                                <button type="button" className="btn btn-secondary">Next</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <section>
                    <div className="row" style={{
                        "-webkit-column-gap": "10px", /* Chrome, Safari, Opera */
                        "-moz-column-gap": "10px", /* Firefox */
                        "column-gap": "10px"
                    }}>
                        {new Movie({id: this.state.movie_list[1]}).render()}

                        {new Movie({id: this.state.movie_list[2]}).render()}

                        {new Movie({id: this.state.movie_list[3]}).render()}

                        {new Movie({id: this.state.movie_list[4]}).render()}

                        {new Movie({id: this.state.movie_list[5]}).render()}
                    </div>
                    <div className="row" style={{
                        "-webkit-column-gap": "10px", /* Chrome, Safari, Opera */
                        "-moz-column-gap": "10px", /* Firefox */
                        "column-gap": "10px"
                    }}>
                        {new Movie({id: this.state.movie_list[6]}).render()}

                        {new Movie({id: this.state.movie_list[7]}).render()}

                        {new Movie({id: this.state.movie_list[8]}).render()}

                        {new Movie({id: this.state.movie_list[9]}).render()}

                        {new Movie({id: this.state.movie_list[10]}).render()}
                    </div>
                </section>
            </div>
        );
    }
}

export default App
;
