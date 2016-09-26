import React, {Component} from 'react';

const OPTIONS = {
  center: {
    lat: 53.5511,
    lng: 9.9937
  },
  zoom: 12
};

export default class Map extends Component {
  constructor() {
    super();
    this.state = {initialized: false};
  }

  /**
   * Initializes the Google Map.
   * @param  {HTMLElement} container  The container for the map
   */
  initMap(container) {
    if (!container || this.state.initialized) {
      return;
    }

    const map = new google.maps.Map(container, OPTIONS);

    if (this.props.children) {
      this.props.children(map);
    }

    this.setState({initialized: true});
  }

  shouldComponentUpdate(nextProps, {initialized}) {
    return initialized ? false : true;
  }

  render() {
    return (
      <div
        ref={container => this.initMap(container)}
        style={{height: '100%', width: '100%'}}
      />
    );
  }
}
