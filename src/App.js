// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom"
import Movies from "./Movies.js";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            search: ""
        }

        for(var i = 0; i < Movies.length; i++) {
            this.state.data.push({"id": i + 1, "movie": Movies[i]});
        }

        this.updateState = this.updateState.bind(this);
        this.searchMovie = this.searchMovie.bind(this);
    }
    
    updateState(e) {
        this.setState({search: e.target.value});
    }

    searchMovie() {
        let data = [ ];
        let index = 1
        for(var i = 0; i < Movies.length; i++) {
            if(Movies[i].includes(this.state.search)) {
                data.push({"id": index, "movie": Movies[i]});
                index = index + 1
            }
        }
        alert("You searched movies with keyword: " + this.state.search)
        this.setState({data: data, search: ""});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render() {
        return (
            <div>
                <input value={this.state.search}
                    onChange = {this.updateState}
                    ref="myInput">
                </input>
                <button onClick={this.searchMovie}>
                Search
                </button>
                <table className="myTable">
                    {this.state.data.map(
                        (dynamicComponent, i) =>
                            <Content key = {i}
                                componentData = {dynamicComponent}/>)}
                </table>
            </div>
        );
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <tr className="myTable">
                    <td className="myTable"> {this.props.componentData.id} </td>
                    <td className="myTable"> {this.props.componentData.movie} </td>
                </tr>
            </div>
        );
    }
}

export default App;
