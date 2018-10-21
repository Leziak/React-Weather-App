import React from 'react';

import Wrapper from './WeatherComponents/Wrapper.js';
import Row from './WeatherComponents/Row.js'
import Container from './WeatherComponents/Container.js';

const weather = (props) => {
    return (
        <Wrapper>
            <Row>
                <h1>{props.city[0].toUpperCase() + props.city.slice(1).toLowerCase()}, {props.country}</h1>
                <div>
                    <p>{props.lat}</p>
                    <p>{props.lon}</p>
                </div>
            </Row>
            <Container>
                <h2>Temperature</h2>
                <Row spec>
                    <p>{props.celsius} °C</p>
                    <p>{props.fahrenheit} °F</p>
                </Row>
            </Container>
            <Container>
                <h2>Overview</h2>
                <Row spec>
                    <p>{props.overview}</p>
                    <p>{props.windSpeed}</p>
                </Row>
            </Container>
            <p>Data from the <a href={props.url}>{props.name}</a> API.</p>
        </Wrapper>
    )
};

export default weather;
