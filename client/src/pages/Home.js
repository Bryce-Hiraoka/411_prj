import React, { Component, useState } from 'react';
import logo from '../assets/jsa.svg';
import axios from 'axios'

import HomeCarousel from '../components/HomeCarousel';

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
            <div>
                <HomeCarousel />
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