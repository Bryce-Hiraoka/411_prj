import React, { Component } from 'react';

import HomeCarousel from '../components/HomeCarousel';

import logo from '../assets/jsa.svg';

class Tester extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
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

                <header className="App-header">

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Summary:
                            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </header>
            </div>
        );
    }
}

export default Tester;