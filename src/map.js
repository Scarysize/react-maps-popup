import React, { Component } from 'react';

const OPTIONS = {
  center: {
    lat: 53.5511,
    lng: 9.9937
  },
  zoom: 12
}

export default class Map extends Component {
  constructor() {
    super();
    this.state = {initialized: false};
  }

  initMap(container) {
    if (!container || this.state.initialized) {
      return;
    }

    const map = new google.maps.Map(container, OPTIONS);  // eslint-disable-line

    if (this.props.children) {
      this.props.children(map);
    }

    this.setState({initialized: true});
  }

  shouldComponentUpdate(nextProps, {initialized}) {
    return !initialized ? true : false;
  }

  render() {
    return <div
            ref={div => this.initMap(div)}
            style={{height: '100%', width: '100%'}}
           />;
  }
}
