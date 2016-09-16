import React, { Component } from 'react';

import Map from './map';
import Popup from './popup'

class App extends Component {
  constructor() {
    super();
    this.state = {map: null};
  }

  setMap(map) {
    if (!this.state.map) {
      this.setState({map});
    }
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%', position: 'relative'}}>
        <Map>
          {map => this.setMap(map)}
        </Map>
        {
          this.state.map && <Popup map={this.state.map} />
        }
      </div>
    )
  }
}

export default App;
