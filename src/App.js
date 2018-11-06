import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {

    searchMovie(movieName) {
    }

    render() {
        return (
            <div>
                <h1> Hello World! </h1>
                <SearchBar searchMovie={this.searchMovie.bind(this)}/>
            </div>
    );
}
}

class SearchBar extends React.Component {
    constructor() {
        this.movieName = "";
    }

    render({searchMovie}) {
        return (
            <div>
                <input ref={node => {
                    this.movieName = node;
                }} />
                <button onClick={() => {
                    searchMovie(this.movieName);
                    this.movieName.value = "";
                }}>
                Search
                </button>
            </div>
        );
    }
}


export default App;
