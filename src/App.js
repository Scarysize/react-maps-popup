import React, {Component} from 'react';

import Map from './map';
import Popup from './popup';

const coords = {
  lat: 53.56131484852696,
  lng: 9.961445331573486
};

const popupStyles = {
  padding: '0 10px 10px 10px',
  backgroundColor: '#fff'
};

class App extends Component {
  constructor() {
    super();
    this.state = {map: null};

    this.setMap = this.setMap.bind(this);
  }

  /**
   * Saves the Google Maps instance to the component state. If the state already
   *   contains a map instance, it won't be overwritten.
   * @param  {google.maps.Map} map  The map instance to save
   */
  setMap(map) {
    this.setState(previousState => {
      if (!previousState.map) {
        return {
          ...previousState,
          map
        };
      }

      return previousState;
    });
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
    );
  }
}

export default App;
