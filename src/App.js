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
                <table cellpadding="10px">
                    <tbody>
                    <tr>
                        <td>
                            {new Movie({id: this.state.movie_list[0], recommend: this.recommend}).render()}
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.myClick}>
                                Randomly recommend me some movies!
                            </button>
                        </td>
                        <td>
                            {/*<form>*/}
                                {/*<fieldset className="form-group">*/}
                                    {/*<legend>Checkboxes</legend>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Action*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Adventure*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Animation*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Children's*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Comedy*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Crime*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Documentary*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Drama*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Fantasy*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Film-Noir*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Horror*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Musical*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Mystery*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Romance*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Sci-Fi*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Thriller*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> War*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-check">*/}
                                        {/*<label className="form-check-label">*/}
                                            {/*<input className="form-check-input" type="checkbox" value=""*/}
                                                   {/*checked=""/> Western*/}
                                        {/*</label>*/}
                                    {/*</div>*/}
                                {/*</fieldset>*/}
                                {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
                            {/*</form>*/}
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-secondary" onClick={this.moveBack}>Previous
                                </button>
                                <button type="button" className="btn btn-secondary">Middle</button>
                                <button type="button" className="btn btn-secondary">Next</button>
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
                                    "10px", /* Chrome, Safari, Opera */
                                "-moz-column-gap":
                                    "10px", /* Firefox */
                                "column-gap":
                                    "10px"
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
                    <
                        div
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
                    <
                    /section>
            </div>
    )
    ;
    }
    }

    export default App
    ;
