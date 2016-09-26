import React, {Component, PropTypes} from 'react';

import calcPixelPosition from './calcPixelPosition';

import './popup.css';

const eventsToListenFor = [
  'center_changed',
  'bounds_changed',
  'drag',
  'projection_changed',
  'tilesloaded',
  'zoom_changed'
];

export default class Popup extends Component {
  constructor(props) {
    super();

    this.map = props.map;
    this.mapListeners = [];

    this.state = {
      pixel: {x: null, y: null}
    };
  }

  componentWillMount() {
    const {map, props} = this;
    const {coords} = props;
    const recalcPosition = () => this.setState({
      pixel: calcPixelPosition(coords, map)
    });

    eventsToListenFor
      .map(eventName => map.addListener(eventName, () => recalcPosition()))
      .map(listener => this.mapListeners.push(listener));
  }

  componentWillUnmount() {
    this.mapListeners.forEach(listener => this.map.removeListener(listener));
  }

  render() {
    const style = {
      ...this.props.styles,
      position: 'absolute',
      top: `${this.state.pixel.y || 0}px`,
      left: `${this.state.pixel.x || 0}px`
    };

    return (
      <div className="popup" style={style}>
        {this.props.children || 'Hello there!'}
      </div>
    );
  }
}

Popup.propTypes = {
  children: PropTypes.array,
  coords: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired,
  styles: PropTypes.object
};
