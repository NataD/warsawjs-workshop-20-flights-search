import React from "react";
import Flight from "./Flight";
import FlightFilter from "./FlightFilter";

class FlightsView extends React.Component{
    async componentDidMount(){
        //loader
        this.setState({
            flightsFetching: true
        });
        //
        const {fromValue, toValue, departValue, returnValue} = this.props.flightData;
        //
        const url = "https://warsawjs-flights-api.herokuapp.com/flights";
        const secondUrl = `${url}/${departValue}/${returnValue}/${fromValue}/${toValue}`;
        console.log(secondUrl);
        const flights = await fetch(secondUrl)
            .then( (res) => res.json() );

        this.setState({
            flights,
            //loader
            flightsFetching: false
        });
    }

    state = {
        flights: [],
        priceMax: 700,
        //loader
        flightsFetching:false
    };


    changeFilterValues = (values) => {
        this.setState(values);
    };

    render(){
        const flightsMaped =
            this.state.flights
                .filter(flight =>
                    !this.state.priceToggled ||
                    flight.price< +this.state.priceMax)
                .map(flight => (<Flight key={flight.id} flight={flight} />));

        return (
            <div>

                {this.state.flightsFetching ? <p>Loading...</p> :null}
                <FlightFilter changeFilterValues={this.changeFilterValues}/>
                { flightsMaped }
            </div>
        )

    }
}

export default FlightsView;