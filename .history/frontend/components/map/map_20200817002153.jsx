import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

class Map extends React.Component {
    constructor(props) {
        super(props);



    }

    componentDidMount() {
        // set the map to show SF

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        // Object.values(state.entities.benches)

        if (this.props.singlePlace) {

            // this.props.fetchplace(this.props.match.params.placeId);
            this.MarkerManager.updateMarkers([this.props.place]); // updateMarkers takes in an array
        } else {
            this.MarkerManager.updateMarkers(this.props.benches);
            this.filterBounds();
        }
        // idle b/c we want to capture bounds when map is idle NOT bounds changed 
        // this is where we get our bounds from our front end!
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
            this.registerListeners();
        })
    }

    handleClick(coords) {
        const { history } = this.props;
        history.push({
            pathname: "benches/new",
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }




    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
        });

        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
    }

    componentDidUpdate() {
        if (this.props.singleBench) {
            this.MarkerManager.updateMarkers([this.props.bench]); // updateMarkers takes in an array
        } else {
            this.MarkerManager.updateMarkers(this.props.benches);
        }
    };

    render() {
        return (
            <div id='map-container' ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default withRouter(Map);