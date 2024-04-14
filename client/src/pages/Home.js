import React, { Component } from 'react';
import logo from '../assets/jsa.svg';

import HomeCarousel from '../components/HomeCarousel';
import Image from 'react-bootstrap/Image';

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{position: 'relative',                            
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',}}>
                    <HomeCarousel />
                    <Image src={logo} rounded style={{
                            position: 'absolute', 
                            width: '30%', 
                            height: '30%',
                            transform: 'translateY(-60%)'
                        }} 
                    />
                    </div>
                <header className="App-header">
                    <img className="App-logo" src={logo} alt="logo" />
                    <h1 className="App-title">Welcome to JSA</h1>
                </header>    
            </div>
        );
    }
}

export default Home;