import React, { Component } from 'react';

import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';

//Requerimos la key 
import { WEATHER_KEY } from './keys';


//Componente Principal Donde se establece el estado

class App extends Component {      
    //Almacenamos lo que queremos pintar
    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        error: null
    };

    //Funcion que obtiene el clima
    getWeather = async (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        //Guardamos valores de ciudad y pais
        const cityValue = city.value;
        const countryValue = country.value;
        //Si existe valor viudad y valor pais muestra datos, si no existen establece un error
        if (cityValue && countryValue) {
            //Utilizamos variables para indicar la ciudad y el pais
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
           //Guardamos respuesta en una constante de la consulta que se hace a openweathermap
            const response = await fetch(API_URL);
            //Convertimos los datos a json para poder mostrarlos
            const data = await response.json();
            console.log(data)

            //Definimos que informacion queremos guardar, indicando donde se encuentra
            // Hacemos consulta y obtenemos datos estableciendolos en el estado

            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            });
        } else {
            this.setState({
                error: 'Porfavor introduce una ciudad y un pais'
            });
        }

    }


    //Con ...this.state, pasamos todo el estado de golpe evitando pasarlo uno a uno

    render() {
        return <div className="container p-4">
            <div className="row">
                <div className="col-md-6 mx-auto"> 
                    <WeatherForm
                        getWeather={this.getWeather}
                    />
                    
                    <WeatherInfo {...this.state} /> 
                    
                </div>
            </div>
        </div>
    }
}

export default App;