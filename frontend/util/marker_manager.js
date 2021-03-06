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
        const placesObj = {};
        // places = places[0] ? places : [];

        places.forEach(place => placesObj[place.id] = place)

        // for (place in places){
        //     placesObj[place.id] = place;
        //     if (!this.markers[place.id]){
        //         this.createMarkerFromplace(place, this.handleClick)
        //     }
        // }
        places
            .filter(place => !(this.markers[place.id]))
            .forEach(place => this.createMarkerFromplace(place, this.handleClick))
        // forEach on a empty array will not run the code

        Object.values(this.markers)
            .filter(place => !placesObj[place.id])
            .forEach(place => this.removeMarkers(this.markers[place.id]))
    }

}