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
            this.state.data.push(
                {"id": i + 1, "movie": Movies[i]})
        }

        this.updateState = this.updateState.bind(this);
        this.searchMovie = this.searchMovie.bind(this);
    }
    
    updateState(e) {
        this.setState({search: e.target.value});
    }

    searchMovie() {
        let data = [ ];
        var index = 1
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
                <table>
                    {this.state.data.map(
                        (dynamicComponent, i) =>
                            <Content key = {i} componentData={dynamicComponent}/>)}
                </table>
            </div>
        );
    }
}

class Content extends React.Component {
    renderOdd() {
        return (
            <div>
                <tr>
                    <th> {this.props.key} </th>
                    <td>
                        <span>
                        {this.props.componentData}
                        <br />
                        </span>
                    </td>
                </tr>
            </div>
        );
    }
    renderEven() {
        return (
            <div>
                <tr>
                    <td> {this.props.key} </td>
                    <td>
                        <span>
                        {this.props.componentData}
                        <br />
                        </span>
                    </td>
                </tr>
            </div>
        );
    }
    render() {
        if(this.props.key % 2 == 0) {
            return(this.renderEven());
        } else {
            return(this.renderOdd());
        }
    }
}

export default App;
