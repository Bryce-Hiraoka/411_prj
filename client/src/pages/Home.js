import React, { Component } from 'react';
import logo from './Asset.svg';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img className="App-logo" src={logo} alt="logo" />
                    <h1 className="App-title">Welcome to JSA</h1>
                    <a href="http://localhost:5000/auth/google">Authenticate </a>
                </header>
            </div>
        );
    }
}

export default Home;