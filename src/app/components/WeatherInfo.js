import React from 'react';

const WeatherInfo = props => {
    console.log(props)

    //Definimos las propiedades
    //Con props.error si existe el error pinta esta regla
    //Si obtenemos la temperatura mostramos el resto de datos
    return (
        <div>
            
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }

            
            {props.temperature ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> Localización: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature} ℃, {props.description}</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> Humedad: {props.humidity}%</p>
                    }
                    {
                        props.wind_speed &&
                        <p><i className="fas fa-wind"></i> Velocidad viento: {props.wind_speed} km/h</p>
                    }
                </div>
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x"></i>
                </div>
            }
        </div>

    )
}

export default WeatherInfo;