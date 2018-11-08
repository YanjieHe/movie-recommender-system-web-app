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
            data: Movies,
            search: ""
        }

        this.updateState = this.updateState.bind(this);
        this.searchMovie = this.searchMovie.bind(this);
    }
    
    updateState(e) {
        this.setState({search: e.target.value});
    }

    searchMovie() {
        let data = [ ];
        for(var i = 0; i < Movies.length; i++) {
            if(Movies[i].includes(this.state.search)) {
                data.push(Movies[i]);
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
                            <Content componentData={dynamicComponent}/>)}
                </table>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <tr>
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
}

export default App;
