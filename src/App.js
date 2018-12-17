import React, {Component} from 'react';
import summaries from './summaries.json'
import movie_names from './movie_names.json'
import './App.css'
import Movie from "./Movie.js"

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {movie_list: [115645]}
        this.myClick = this.myClick.bind(this)
    }

    myClick() {
        var index = Math.floor(Math.random() * Object.keys(movie_names).length)
        this.setState({movie_list: [Object.keys(movie_names)[index]]})
    }

    render() {
        return (
            <div>
                <div className="container">
                    <button onClick={this.myClick}>
                        Randomly recommend me some movies!
                    </button>
                    {new Movie({id: this.state.movie_list[0]}).render()}
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                {new Movie({id: 100050}).render()}
                            </td>
                            <td>
                                {new Movie({id: 112346}).render()}
                            </td>
                            <td>
                                {new Movie({id: 113101}).render()}
                            </td>
                            <td>
                                {new Movie({id: 113862}).render()}
                            </td>
                            <td>
                                {new Movie({id: 116839}).render()}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {new Movie({id: 112637}).render()}
                            </td>
                            <td>
                                {new Movie({id: 112697}).render()}
                            </td>
                            <td>
                                {new Movie({id: 114272}).render()}
                            </td>
                            <td>
                                {new Movie({id: 112365}).render()}
                            </td>
                            <td>
                                {new Movie({id: 113972}).render()}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
