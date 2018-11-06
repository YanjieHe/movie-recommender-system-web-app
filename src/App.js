// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ""
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    
    updateState(e) {
        this.setState({data: e.target.value});
    }

    clearInput() {
        this.setState({data: ""});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render() {
        return (
            <div>
                <input value={this.state.data}
                    onChange={this.updateState}
                    ref="myInput">
                    <button onClick={this.clearInput}>
                    Clear
                    </button>
                </input>
            </div>
        );
    }
}

export default App;
