import React, { Component, PropTypes } from 'react';

import './popup.css';

import calcPixelPosition from './calcPixelPosition';

export default class Popup extends Component {
  constructor({coords, map}) {
    super();
    this.map = map;
    this.state = {
      pixel: {x: null, y: null}
    };
  }

  componentWillMount() {
    const {map} = this;
    const {coords} = this.props;
    const recalcPosition = () => this.setState({
      pixel: calcPixelPosition(coords, map)
    });

    this.centerChangedListener = recalcPosition;
    this.projectionChangedListener = recalcPosition;
    this.zoomChangedListener = recalcPosition;

    map.addListener('center_changed', this.centerChangedListener);
    map.addListener('projection_changed', this.projectionChangedListener);
    map.addListener('zoom_changed', this.zoomChangedListener);
  }

  render() {
    const style = {
      ...this.props.styles,
      position: 'absolute',
      top: `${this.state.pixel.y || 0}px`,
      left: `${this.state.pixel.x || 0}px`
    };

    return (
      <div
        className="popup"
        style={style}
      >
        {this.props.children}
      </div>
    )
  }
}

Popup.propTypes = {
  coords: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired,
  styles: PropTypes.object
}
