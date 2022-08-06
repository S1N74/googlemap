import React from 'react'
import './Resmap.css'
import { GoogleMap, useJsApiLoader ,Marker,InfoWindow,} from '@react-google-maps/api';


const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding:10
}


const containerStyle = {
  width: "900px",
  height: '400px'
};

const center = {
  lat: 13.815329,
  lng: 100.531237
};

const position = {
  lat: 13.815329,
  lng: 100.531237
}




function ResMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAM9mPb5lcaohYVfZBn2aoZKe344runqaA"

  })


  const [map, setMap] = React.useState(null)

  const onLoad = marker => {
    console.log('marker: ', marker)
  }
  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return isLoaded ? (

    <div className='container' >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >

      <Marker
      onLoad={onLoad}
      position={position}
      />

      <InfoWindow InfoWindow
        onLoad={onLoad}
        position={position}
      >
        <div style={divStyle}>
          <h1>Search</h1>
          <input type="text" placeholder="Bangsue " id="inputId" class="inputClass"/>
        </div>
      </InfoWindow>
      
    
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </div>
  ) : <></>
}

export default React.memo(ResMap)