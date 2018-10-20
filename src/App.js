import React, { Component } from 'react';
import './App.css';

import Form from './Components/Form/Form.js';
import Hero from './Components/Hero.js';
import Weather from './Components/Weather/Weather.js';
import openWeatherMap from "./Components/Api/OpenWeatherMap.js";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: true,
            showWeather: false,
            city: '',
            allowRequest: true,
            openWeatherMap: {},
            apixu: {},
            weatherbit: {}
        };

        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidUpdate() {
        this.requestHandler();
    };

    submitHandler(event) {
        this.setState({
            city: event.target[0].value,
            allowRequest: true});

        event.preventDefault();
    }

    requestHandler() {
        const city = this.state.city.toLowerCase();

        if(this.state.allowRequest){
           openWeatherMap.get(`weather?appid=886705b4c1182eb1c69f28eb8c520e20&q=${city}`)
                .then(res => {
                    console.log(res);
                })
               .catch(err => {
                    console.log(err);
                });


        }
    }

    weatherHandler() {
        this.setState({
            showForm: false,
            allowRequest: false,
        })
    }


    render() {

        let display = '';

        if (this.state.showForm) {
            display = (
                <div>
                    <Form submit={this.submitHandler}/>
                </div>
            )
        } else {
            let weathers = [
                this.state.openWeatherMap,
                this.state.apixu,
                this.state.weatherbit
            ]
            display = weathers.map(weather => {
                return (
                    <h1>Kokot</h1>
                )
            })
        }


        return (
            <div className="App">
                <Hero/>
                {display}
            </div>
        )
    }
}

export default App;
