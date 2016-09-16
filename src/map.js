import React, { Component } from 'react';

const OPTIONS = {
  center: {
    lat: 53.5511,
    lng: 9.9937
  },
  zoom: 12
}

export default class Map extends Component {
  initMap(container) {
    if (!container) {
      return;
    }

    this.map = new google.maps.Map(container, OPTIONS); // eslint-disable-line

    if (this.props.children) {
      this.props.children(this.map);
    }
  }

  render() {
    return (
      <div
        ref={div => this.initMap(div)}
        style={{height: '100%'}}
      >
      </div>
    );
  }
}
