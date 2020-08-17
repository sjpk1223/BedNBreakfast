export default class MarkerManager {
    constructor(map, handleClick){
        this.map = map;
        this.markers = {};
        this.handleClick = handleClick;
        this.createMarker = this.createMarker.bind(this);
    }

    createMarker(place) {
        const marker = new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: this.map,
            title: place.title,
            id: place.id
        });
        marker.addListener('click', () => this.handleClick(place));
        this.markers[marker.id] = marker;
    }

    removeMarker(marker){
        this.markers[marker.id].setMap(null);
        delete this.markers[marker.id];
    }

    updateMarkers(places) {
        const placesObject = {} ;
        // empty array is not falsey value
        if (places.length !== 0 ){
        places.forEach(place => placesObject[place.id] = place )
        places
        .filter(place => !(this.markers[place.id]))
        .forEach(place => this.createMarker(place, this.handleClick))

        Object.values(this.markers)
        .filter(place => !placesObject[place.id])
        .forEach(place => this.removeMarkers(this.markers[place.id]))
        }
    }

}