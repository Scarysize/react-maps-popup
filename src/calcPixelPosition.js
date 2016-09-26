/**
 * Calculates screen pixel position from lat lng coordinates.
 * @param  {object} coords  Coordinates object: {lat, lng}
 * @param  {google.maps.Map} map  The Google Maps object
 * @return {object}  Screen coordinates object: {x, y}
 */
export default function calcPixelPosition(coords, map) {
  const projection = map.getProjection();

  if (!projection) {
    return {x: 0, y: 0};
  }

  const latLng = new google.maps.LatLng(coords);
  const bounds = map.getBounds();

  const topRight = projection.fromLatLngToPoint(bounds.getNorthEast());
  const bottomLeft = projection.fromLatLngToPoint(bounds.getSouthWest());

  const scale = Math.pow(2, map.getZoom());

  const worldPoint = projection.fromLatLngToPoint(latLng);

  const pixel = {
    x: (worldPoint.x - bottomLeft.x) * scale,
    y: (worldPoint.y - topRight.y) * scale
  };

  return pixel;
}
