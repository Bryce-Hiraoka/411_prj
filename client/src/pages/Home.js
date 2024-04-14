import React, { Component } from 'react';
import logo from '../assets/jsa.svg';

import HomeCarousel from '../components/HomeCarousel';
import Image from 'react-bootstrap/Image';

class Home extends Component {
    render() {
        return (
            <div style={{ paddingTop: '60px' }}>
                <div style={{position: 'relative',                            
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            }}>
                    <HomeCarousel />
                    <h1 className="fade-in-text" style={{position: 'absolute', 
                                color: 'white', 
                                fontSize: '2vw',
                                transform: 'translateY(-950%)',
                                textShadow: '0 10px 10px rgba(0, 0, 0, 0.5)',
                                fontFamily: 'Arial Rounded MT Bold'
                                }}>BU JAPANESE STUDENT ASSOCIATION</h1>
                    <Image className="fade-in-logo" src={logo} roundedCircle style={{
                    position: 'absolute', 
                    width: '17%', 
                    height: '30%',
                    transform: 'translateY(-70%)',
                    boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.2)',
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