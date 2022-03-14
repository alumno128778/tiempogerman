import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
       
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Nombre ciudad" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="Nombre pais" className="form-control" />
            </div>
            <button className="btn btn-success btn-block">
                Obtener clima
            </button>
        </form>
    </div>
);

export default WeatherForm;