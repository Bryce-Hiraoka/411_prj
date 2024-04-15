import React, { Component } from 'react';

import Image from 'react-bootstrap/esm/Image';
import omatsuri_eboard from '../assets/omatsuri-eboard.jpg';

class About extends Component {
    render() {
        return (
            <div style={{ paddingTop: '60px', display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <Image src={omatsuri_eboard} alt="About Us" style={{ width: '100%' }} />
                </div>
                <div style={{ flex: 1 }}>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.</p>
                </div>
            </div>
        );
    }
}

export default About;