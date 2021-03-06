import React, { Component } from 'react'; 

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: parseFloat(this.props.lat),
                lng: parseFloat(this.props.lon)
            }
        })
    }

    render() {
        return <div ref="map" />;  // this.refs.map
    }
}

export default GoogleMap; 