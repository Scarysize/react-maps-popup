import React, { Component } from 'react';

import Map from './map';
import Popup from './popup'

const coords = {
  lat: 53.56131484852696,
  lng: 9.961445331573486
};

const popupStyles = {
  padding: '0 10px 10px 10px'
}

class App extends Component {
  constructor() {
    super();
    this.state = {map: null};

    this.setMap = this.setMap.bind(this);
  }

  setMap(map) {
    if (!this.state.map) {
      this.setState({map});

      const marker = new google.maps.Marker({
        title: 'here',
        position: new google.maps.LatLng(coords)
      });

      marker.setMap(map);
    }
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%', position: 'relative'}}>
        <Map>
          {this.setMap}
        </Map>
        {
          this.state.map && (
            <Popup
              coords={coords}
              map={this.state.map}
              styles={popupStyles}
            >
              <h1>Information</h1>
              <ul>
                <li>This</li>
                <li>That</li>
                <li>Those</li>
              </ul>
            </Popup>
          )
        }
      </div>
    )
  }
}

export default App;
