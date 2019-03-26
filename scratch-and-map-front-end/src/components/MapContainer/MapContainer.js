import React from 'react';
import L from 'leaflet';
import styled from 'styled-components'
import 'leaflet/dist/leaflet.css';
import countrydata from './countries.geo.json'
import axios from 'axios'

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`


//Sample data temporary, used to test fillColor function for leaflet
const sampleData = [
  {
    country: 'US1',
    status: 1
  },
  {
    country: 'RUS',
    status: 3
  },
  {
    country: 'BRA',
    status: 2
  },
  {
    country: 'CH1',
    status: 4
  }
];

//color codes for country status
const colorCodes = {
  0: 'lightgrey',
  1: '#CD5D01',
  2: '#8FC201',
  3: '#9B016D',
  4: '#017B7B'
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
        axios.get('http://localhost:5000/api/users')
        .then(response => console.log(response.users))


        function style(feature) {
            return {
                fillColor: colorCodes[countryColorMatcher(sampleData, feature.properties.SOV_A3)] || 'pink',
                weight: 1,
                opacity: 1,
                color: 'lightgrey',
                fillOpacity: 0.7,
            };
        };

        this.map = L.map('map', {
            center: [30, 0],
            zoom: 3,
            zoomControl: false,
            maxZoom: 20,
            minZoom: 3
        });

        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png', {
          attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 3,
            noWrap: true,
        }).addTo(this.map);
        

        L.geoJson(countrydata,{
          onEachFeature: function (feature, layer) {
            layer.bindPopup('<h3>'+feature.properties.ADMIN+'</h3>', {closeButton: false, offset: L.point(0, -20)});
            layer.on('mouseover', function() { layer.openPopup(); });
            layer.on('mouseout', function() { layer.closePopup(); })
          },
          style: style,
          pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng)
          }
        }).addTo(this.map)
    }

    

    render(){
        
        return(
            <div>
                
                <Wrapper id='map' />
            </div>
        )
    }
}