import React from 'react';
import L from 'leaflet';
import styled from 'styled-components'
import 'leaflet/dist/leaflet.css';
import countrydata from './countries.geo.json'

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`

//Sample data temporary, used to test fillColor function for leaflet
const sampleData = [
  {
    country: 'USA',
    status: 1
  },
  {
    country: 'RUS',
    status: 3
  }
];

//color codes for country status
const colorCodes = {
  0: 'grey',
  1: 'yellow',
  2: 'green',
  3: 'red',
  4: 'blue'
}

//function that will take in 2 parameters, the users country info(sampleData), and the current
//country code (feature.id is the the id of the country in the geojson data (the 3 letter country code))
//this function has been tested and will correctly match the 3 letter country code from sampleData with
//the 3 letter code from geojson data, and return the correct number
function countryColorMatcher(userData, geoJsonCountry) {
  let colorCode = 0;
  userData.map(country => {
    if (JSON.stringify(country.country) === JSON.stringify(geoJsonCountry)) {
      console.log(country.status)
      colorCode = country.status
    };
  });
  return colorCode; 
};

export default class MapContainer extends React.Component {

    componentDidMount() {
        function style(feature) {
            return {
                fillColor: colorCodes[countryColorMatcher(sampleData, feature.id)] || 'pink',
                weight: 1,
                opacity: 1,
                color: 'red',
                fillOpacity: 0.7
            };
        }

        this.map = L.map('map', {
            center: [58, 16],
            zoom: 6,
            zoomControl: false,
            
        });

        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png', {
            maxZoom: 10,
            maxNativeZoom: 10,
            noWrap: true,
        }).addTo(this.map);

        L.geoJson(countrydata, {style: style}).addTo(this.map)
    }

    render(){
        
        return(
            <div>
                <Wrapper width='1280px' height='720px' id='map' />
            </div>
        )
    }
}