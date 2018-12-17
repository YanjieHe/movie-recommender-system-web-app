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
        this.moveBack = this.moveBack.bind(this)
        var index = Math.floor(Math.random() * Object.keys(movie_names).length)
        var movies_id = Object.keys(movie_names)
        var imdb_id = movies_id[index]
        var movies = []
        movies.push(imdb_id)
        movies = movies.concat(neighbours[imdb_id])
        this.state = {movie_list: movies, record: [imdb_id]}
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
        this.state.record.push(imdb_id)
        this.setState({movie_list: movies, record: this.state.record})
    }

    moveBack() {
        console.log("try to move back")
        if (this.state.record.length > 1) {
            var imdb_id = this.state.record[this.state.record.length - 2]
            this.state.record.pop()
            this.state.record.pop()
            this.recommend(imdb_id)
        }
    }

    render() {
        return (
            <div>
                <h3> A Movie Recommender System </h3>
                <hr className="my-4"/>
                <table cellpadding="10px">
                    <tbody>
                    <tr>
                        <td>
                            {new Movie({id: this.state.movie_list[0], recommend: this.recommend}).render()}
                        </td>
                        <td>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <h3> A Brief Introduction </h3>
                                    <p>Welcome! The website you are browsing is a content-based movie recommender
                                        system.</p>
                                    <p>Usually, a movie recommender system recommend movies based on user ratings.
                                        However, I built a recommender system based solely on the content of movies.
                                        Namely, I solved the cold-start problem by utilizing the data collected from
                                        movies themselves.</p>
                                    <p>To make accurate and suprising recommendations, I extracted information from
                                        movie trailers used methods in computer vision and audio analysis.
                                        And also, I integrate centrality features of movies by applying social network
                                        analysis.</p>
                                    <p>
                                        Enjoy!
                                    </p>

                                    <p> Best,<br/>
                                        Yanjie He</p>

                                    <button type="button" className="btn btn-primary btn-lg btn-block"
                                            onClick={this.myClick}>
                                        Randomly recommend me a movie!
                                    </button>
                                    <button type="button" className="btn btn-primary btn-lg btn-block"
                                            onClick={this.moveBack}>
                                        Return to the previous movie
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <h3> Similar Movies </h3>
                <hr className="my-4"/>
                <section>
                    <div
                        className="row"
                        style={
                            {
                                "-webkit-column-gap":
                                    "15px", /* Chrome, Safari, Opera */
                                "-moz-column-gap":
                                    "15px", /* Firefox */
                                "column-gap":
                                    "15px"
                            }
                        }>
                        {
                            new Movie({id: this.state.movie_list[1], recommend: this.recommend}).render()
                        }

                        {
                            new Movie({id: this.state.movie_list[2], recommend: this.recommend}).render()
                        }

                        {
                            new Movie({id: this.state.movie_list[3], recommend: this.recommend}).render()
                        }

                        {
                            new Movie({id: this.state.movie_list[4], recommend: this.recommend}).render()
                        }

                        {
                            new Movie({id: this.state.movie_list[5], recommend: this.recommend}).render()
                        }
                    </div>
                    <div
                        className="row"
                        style={
                            {
                                "-webkit-column-gap":
                                    "10px", /* Chrome, Safari, Opera */
                                "-moz-column-gap":
                                    "10px", /* Firefox */
                                "column-gap":
                                    "10px"
                            }
                        }>
                        {
                            new Movie({id: this.state.movie_list[6], recommend: this.recommend}).render()
                        }

                        {
                            new Movie({id: this.state.movie_list[7], recommend: this.recommend}).render()
                        }

                        {
                            new Movie({id: this.state.movie_list[8], recommend: this.recommend}).render()
                        }

                        {
                            new Movie({id: this.state.movie_list[9], recommend: this.recommend}).render()
                        }

                        {
                            new Movie({id: this.state.movie_list[10], recommend: this.recommend}).render()
                        }
                    </div>
                </section>
            </div>
        )
    }
}

export default App
;
