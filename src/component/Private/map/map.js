import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import mapboxgl from 'mapbox-gl';
import '../../../style/Private/map.scss';
import fetchFakeData from './fetchFakeData';
import Popup from './Popup';
import ReactDOM from 'react-dom';
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";



const ENDPOINT = "http://127.0.0.1:8000";





mapboxgl.accessToken = 'pk.eyJ1Ijoia2FpcmVpc21haWwiLCJhIjoiY2tpb3pkNGcwMWhqMjJ5cGs5NHU5ZXRqbCJ9.-JmR_Q1KuwJFFzKqpT3i2A';



var directions = new MapboxDirections({
  accessToken: 'pk.eyJ1Ijoia2FpcmVpc21haWwiLCJhIjoiY2tpb3pkNGcwMWhqMjJ5cGs5NHU5ZXRqbCJ9.-JmR_Q1KuwJFFzKqpT3i2A',
  unit: 'metric',
  
});


function Map() {
  const [response, setResponse] = useState("");
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
  useEffect(() => {
   
    const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        // See style options here: https://docs.mapbox.com/api/maps/#styles
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [10.156049, 36.808149],
        zoom: 12.5,
      });

      map.on('load', () => {
        // add the data source for new a feature collection with no features
        map.addSource('random-points-data', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [],
          },
        });
        // now add the layer, and reference the data source above by name
        map.addLayer({
          id: 'random-points-layer',
          source: 'random-points-data',
          type: 'symbol',
          layout: {
            // full list of icons here: https://labs.mapbox.com/maki-icons
            'icon-image': 'bakery-15', // this will put little croissants on our map
            'icon-padding': 0,
            'icon-allow-overlap': true,
          },
        });
      });

      map.on('moveend', async () => {
        // get new center coordinates
        const { lng, lat } = map.getCenter();
        // fetch new data
        const results = await fetchFakeData({ longitude: lng, latitude: lat });
        // update "random-points-data" source with new data
        // all layers that consume the "random-points-data" data source will be updated automatically
        map.getSource('random-points-data').setData(results);
      });

      map.on('click', 'random-points-layer', e => {
        if (e.features.length) {
          const feature = e.features[0];
          // create popup node
          const popupNode = document.createElement('div');
          ReactDOM.render(<Popup feature={feature} />, popupNode);
          // set popup on map
          popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
        }
      });

      map.on('mouseenter', 'random-points-layer', e => {
        if (e.features.length) {
          map.getCanvas().style.cursor = 'pointer';
        }
      });
      
      // reset cursor to default when user is no longer hovering over a clickable feature
      map.on('mouseleave', 'random-points-layer', () => {
        map.getCanvas().style.cursor = '';
      });
  
      map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      console.log(data);
    });
    map.addControl(directions, 'top-left');
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
}


export default Map;