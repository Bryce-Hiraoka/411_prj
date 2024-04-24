import React, { Component, useState } from 'react';
import logo from '../assets/jsa.svg';
import axios from 'axios'

import HomeCarousel from '../components/HomeCarousel';
import Image from 'react-bootstrap/Image';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
          }

        handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/create-event')
        }

    render() {
        return (
            <div style={{ paddingTop: '58px' }}>
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


                    <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                </header>

            </div>
        );
    };
};

export default Home;