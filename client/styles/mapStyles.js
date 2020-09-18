export const mapStyles = {
  width: '100vw',
  height: 'calc(100vh - 80px)',
  position: 'absolute'
}

export const sidebarStyle = {
  display: 'inline-block',
  position: 'absolute',
  top: 0,
  left: 0,
  margin: '12px',
  // background-color: '#404040',
  color: '#ffffff',
  // z-index: '1 !important',
  padding: '6px'
  // font-weight: 'bold',
}

export const pointStyles = {
  id: 'grocers',
  type: 'circle',
  source: 'ny-grocers',
  paint: {
    'circle-radius': 3,
    'circle-color': 'green'
  },
  filter: ['==', '$type', 'Point']
}

export const isochroneStyles = {
  id: 'isoLayer',
  type: 'fill',
  source: 'iso',
  layout: {},
  paint: {
    'fill-color': '#5a3fc0',
    'fill-opacity': 0.3
  }
}

export const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
}
