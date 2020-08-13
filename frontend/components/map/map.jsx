import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
})

class Map extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435},
            zoom: 13
        };
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map)

        if (this.props.singlePlace){
            
            this.MarkerManager.updateMarkers([this.props.place]);
        } else {
            this.MarkerManager.updateMarkers([this.props.places]);
            
            this.filterBounds();
        }
        // 
    }

    filterBounds() {
        this.map.addListener('idle', () => {
            let latLongBnds = this.map.getBounds();
            let northEastLat = latLongBnds.getNorthEast().lat();
            let northEastLng = latLongBnds.getNorthEast().lng();
            let southWestLat = latLongBnds.getSouthWest().lat();
            let southWestLng = latLongBnds.getSouthWest().lng();
            let bounds = { southWest: { lat: southWestLat, lng: southWestLng }, northEast: { lat: northEastLat, lng: northEastLng } };
            this.props.updateFilter('bounds', bounds);
            // 
            this.registerListeners();
        })
    }

    handleClick(coords) {
        const { history } = this.props;
        history.push({
            pathname: "places/new",
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    registerListeners() {

        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat:north, lng:east},
                southWest: { lat:south, lng:west}
            }
            this.props.updateFilter('bounds', bounds)
        });
        
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        })
    }

    componentDidUpdate(){
        
        if (this.props.singlePlace) {
            
            this.MarkerManager.updateMarkers([this.props.place])
        } else {
            
            this.MarkerManager.updateMarkers([this.props.places])
        }
    }

    render() {
        return (
            <div id='map-container' ref={map => this.mapNode = map}></div>
        )
    }

}

export default withRouter(Map);