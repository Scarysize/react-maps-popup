// 9.961445331573486,
// 53.56131484852696
import React, { Component, PropTypes } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: 10,
  background: '#fff'
};

export default class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {text: 'blah'}
    this.map = props.map;
  }

  componentDidMount() {
    google.maps.event.addListener(this.map, 'center_changed', event => console.log(event));
  }

  render() {
    return (
      <div style={style}>{this.state.text}</div>
    )
  }
}

Popup.propTypes = {
  // coords: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired
}
