import React from 'react';
import Chart from 'react-google-charts';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            countrySettings: [['Country', 'Status']]
        }
    }
    componentDidMount() {
        this.props.sampleData.map(country => {
            this.state.countrySettings.push([country.country, country.status])
        })
    }
    render() {
        console.log(this.state.countrySettings)
        return (
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="GeoChart"
                data={this.state.countrySettings}
                options={{
                    colors: ['red', 'yellow', 'green', 'blue'],
                }}
                mapsApiKey={process.env.REACT_APP_MAPS_API_KEY}
                rootProps={{ 'data-testid': '1' }}
            />
        );
    }
}

export default MapContainer