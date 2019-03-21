import React from 'react';
import L from 'leaflet';
import styled from 'styled-components'
import 'leaflet/dist/leaflet.css';
import countrydata from './countries.geo.json'

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`

export default class MapContainer extends React.Component {

    componentDidMount() {
        function style(feature) {
            return {
                fillColor: 'white',
                weight: 1,
                opacity: 1,
                color: 'red',
                fillOpacity: 0.7
            };
        }

        this.map = L.map('map', {
            center: [58, 16],
            zoom: 6,
            zoomControl: false
        });

        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            maxNativeZoom: 17,
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