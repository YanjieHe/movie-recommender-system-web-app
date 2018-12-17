import React, {Component} from 'react';
import summaries from './summaries.json'
import movie_names from './movie_names.json'
import './App.css'
import Movie from "./Movie.js"
class App extends Component {
    myClick() {
        alert(Math.random() * 100)
    }

    render() {
        return (
            <div>
                <div className="container">
                    {new Movie({id: 115645}).render()}
                    <table>
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
                    </table>
                    <button onClick={this.myClick}>
                        Click Me
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
