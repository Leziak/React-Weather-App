import React, { Component } from 'react';

import Form from './Components/Form/Form.js';
import Button from './Components/Form/FormComponents/Button.js';
import Welcome from './Components/Welcome.js';
import Error from './Components/Error.js';
import Weather from './Components/Weather/Weather.js';
import DisplayWrapper from './Components/DisplayWrapper.js'
import AppWrapper from './Components/AppWrapper.js'

import OpenWeatherMap from './Components/Api/OpenWeatherMap.js';
import Apixu from './Components/Api/Apixu.js';
import Weatherbit from './Components/Api/Weatherbit.js';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: true,
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
            allowRequest: true
        });

        event.preventDefault();
    }

    requestHandler() {
        const city = this.state.city;

        if (this.state.allowRequest) {
            OpenWeatherMap.get(`weather?appid=886705b4c1182eb1c69f28eb8c520e20&q=${city}`)
                .then(res => {
                    this.openWeatherMapHandler(res.data);
                })
                .catch(err => {
                    console.log(err);
                });

            Apixu.get(`current.json?key=4541e8ac645547bfa7700112182010&q=${city}`)
                .then(res => {
                    this.apixuHandler(res.data);
                })
                .catch(err => {
                    console.log(err);
                });

            Weatherbit.get(`current?key=df48f52333a24547974f00331a48d675&city=${city}`)
                .then(res => {
                    this.weatherbitHandler(res.data.data[0]);
                })
                .catch(err => {
                    console.log(err);
                });

            this.displayHandler();
        }

    }

    displayHandler() {
        this.setState({
            showForm: !this.state.showForm,
            allowRequest: !this.state.allowRequest,
        })
    }

    retryHandler() {
        this.setState({
            showForm: !this.state.showForm,
        })
    }

    openWeatherMapHandler(data) {
        this.setState({
            openWeatherMap: {
                name: 'OpenWeatherMap',
                url: 'https://openweathermap.org',
                country: data.sys.country,
                windSpeed: data.wind.speed > 14 ? 'Windy' : 'Still',
                overview: data.weather[0].main,
                celsius: (data.main.temp - 273.15).toFixed(1),
                fahrenheit: Number((((data.main.temp - 273.15) * 1.8) + 32).toFixed(1)),
                lat: data.coord.lat,
                lon: data.coord.lon,
                citySlug: data.name.toLowerCase(),
		city: data.name

            }
        })
    }

    apixuHandler(data) {
        this.setState({
            apixu: {
                name: 'Apixu',
                url: 'https://www.apixu.com/',
                country: data.location.country.split(' ').map(word => word[0]).join(''),
                windSpeed: Number((data.current.wind_kph * 5/18).toFixed(1)) > 14 ? 'Windy' : 'Still',
                overview: data.current.condition.text,
                celsius: data.current.temp_c,
                fahrenheit: data.current.temp_f,
                lat: data.location.lat,
                lon: data.location.lon,
                citySlug: data.location.name.toLowerCase(),
		city: data.location.name
            }
        })
    }

    weatherbitHandler(data) {
        this.setState({
            weatherbit: {
                name: 'Weatherbit',
                url: 'https://www.weatherbit.io/',
                country: data.country_code,
                windSpeed: data.wind_spd > 14 ? 'Windy' : 'Still',
                overview: data.weather.description,
                celsius: data.temp.toFixed(1),
                fahrenheit: Number((((data.temp) * 1.8) + 32).toFixed(1)),
                lat: data.lat.toFixed(2),
                lon: data.lon.toFixed(2),
                citySlug: data.city_name.toLowerCase(),
		city: data.city_name
            }
        })
    }



    render() {

        let display = '';
        let showForm = this.state.showForm;

        if (showForm) {
            display = (
                <div>
                    <Form submit={this.submitHandler}/>
                </div>
            )
        } else {
            let weathers = [
                this.state.apixu,
                this.state.openWeatherMap,
                this.state.weatherbit
            ];

            display = weathers.map(weather => {
                if (this.state.city.toLowerCase() === weather.citySlug){
                        return (
                            <Weather
                                city={weather.city}
                                name={weather.name}
                                url={weather.url}
                                overview={weather.overview}
                                windSpeed={weather.windSpeed}
                                celsius={weather.celsius}
                                fahrenheit={weather.fahrenheit}
                                lon={weather.lon}
                                lat={weather.lat}
                                country={weather.country}
                            />
                        )
                }
                return (
                    <Error>
                        <h1>Didn't receive any usable data! Sorry!</h1>
                    </Error>
                )

            })
        }


        return (
            <AppWrapper>
                <Welcome>Inventi Weather App!</Welcome>
                {showForm
                    ?
                    <DisplayWrapper>
                        {display}
                    </DisplayWrapper>
                    :
                    <div>
                        <DisplayWrapper flex>
                            {display}
                        </DisplayWrapper>
                        <Button retry>
                            <span onClick={this.retryHandler.bind(this)}>
                                Search again?
                            </span>
                        </Button>
                    </div>

                }
            </AppWrapper>
        )
    }
}

export default App;
