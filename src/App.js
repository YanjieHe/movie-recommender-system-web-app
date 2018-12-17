import React, {Component} from 'react';
import summaries from './summaries.json'
import movie_names from './movie_names.json'
import './App.css'

class App extends Component {
    myClick() {
        alert(Math.random() * 100)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <table>
                        <tr>
                            <td>
                                <div className="card">
                                    <img alt="Spider-Man Poster" title="Spider-Man Poster"
                                         width="182"
                                         src="./images/10323.jpg"/>
                                    <div className="container">
                                        <h4><b>{movie_names[100050].title}</b></h4>
                                        <p>{summaries[100050]}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="card">
                                    <img alt="Spider-Man Poster" title="Spider-Man Poster"
                                         width="300px"
                                         src="./images/10323.jpg"/>
                                    <div className="container">
                                        <h4><b>{movie_names[100050].title}</b></h4>
                                        <p>{summaries[100050]}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="card">
                                    <img alt="Spider-Man Poster" title="Spider-Man Poster"
                                         width="300px"
                                         src="./images/10323.jpg"/>
                                    <div className="container">
                                        <h4><b>{movie_names[100050].title}</b></h4>
                                        <p>{summaries[100050]}</p>
                                    </div>
                                </div>
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
