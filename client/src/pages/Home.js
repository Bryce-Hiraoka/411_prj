import React, { Component } from 'react';
import logo from '../assets/jsa.svg';

import HomeCarousel from '../components/HomeCarousel';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeCarousel />
                <header className="App-header">
                    <img className="App-logo" src={logo} alt="logo" />
                    <h1 className="App-title">Welcome to JSA</h1>
                </header>
            </div>
        );
    }
}

export default Home;