import React, { Component } from 'react';
import SearchView from './SearchView';
import FlightsView from './FlightsView';

class App extends Component {
    state = {
        flightData: {},
        view: "search"
    };

    onSearchSubmit = (flightData) => {
        console.log(flightData);
        this.setState({
            flightData: flightData,
            view: "flights"
        })
    };

  render() {
    return (
      <div>
          {
              this.state.view === "search" ? (<SearchView onAppSubmit={this.onSearchSubmit} />) : <FlightsView flightData={this.state.flightData} />
          }

      </div>
    );
  }
}

export default App;
