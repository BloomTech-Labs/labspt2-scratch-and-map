import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import countrydata from "./countries.geo.json";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUserData } from "../../actions/mapActions";

import styled from "styled-components";

import { returnCode } from "../helper";
import { getUserDataReducer } from "../../reducers/mapReducer.js";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

//Sample data temporary, used to test fillColor function for leaflet
const sampleData = [
  {
    country: "US1",
    status: 1
  },
  {
    country: "RUS",
    status: 3
  },
  {
    country: "BRA",
    status: 2
  },
  {
    country: "CH1",
    status: 4
  }
];

//color codes for country status
const colorCodes = {
  0: "lightgrey",
  1: "#CD5D01",
  2: "#8FC201",
  3: "#9B016D",
  4: "#017B7B"
};

//function that will take in 2 parameters, the users country info(sampleData), and the current
//country code (feature.id is the the id of the country in the geojson data (the 3 letter country code))
//this function has been tested and will correctly match the 3 letter country code from sampleData with
//the 3 letter code from geojson data, and return the correct number
function countryColorMatcher(userData, geoJsonCountry) {
  let colorCode = 0;
  userData.map(country => {
    if (
      JSON.stringify(returnCode(country.country_id)) ===
      JSON.stringify(geoJsonCountry)
    ) {
      colorCode = country.status;
    }
  });
  return colorCode;
}

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.props.getUserData(1);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading !== nextProps.loading) {
      function style(feature) {
        return {
          fillColor:
            colorCodes[
              countryColorMatcher(
                nextProps.userCountryData,
                feature.properties.SOV_A3
              )
            ] || "pink",
          weight: 1,
          opacity: 1,
          color: "lightgrey",
          fillOpacity: 0.7
        };
      }

      this.map = L.map("map", {
        center: [30, 0],
        zoom: 3,
        zoomControl: false,
        maxZoom: 20,
        minZoom: 2.5,
        maxBounds: [[-90, -180], [90, 180]],
        maxBoundsViscosity: 1
      });

      L.tileLayer(
        "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png",
        {
          attribution:
            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          minZoom: 3,
          noWrap: true
        }
      ).addTo(this.map);

      L.geoJson(countrydata, {
        onEachFeature: (feature, layer) => {
          layer.bindPopup("<h3>" + feature.properties.ADMIN + "</h3>", {
            closeButton: false,
            offset: L.point(0, -20)
          });
          layer.on("mouseover", e => {
            let popup = e.target.getPopup();
            popup.setLatLng(e.latlng).openOn(this.map);
          });
          layer.on("mouseout", e => {
            e.target.closePopup();
          });
          layer.on("click", () => {
            this.setState({ clickedCountry: feature.properties.SOV_A3 });
          });
        },
        style: style,
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng);
        }
      }).addTo(this.map);
    }
  }

  render() {
    return (
      <div>
        <Wrapper id="map" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.getUserDataReducer.userData,
    userCountryData: state.getUserDataReducer.userCountryData,
    loading: state.getUserDataReducer.loading
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { getUserData }
  )(MapContainer)
);
