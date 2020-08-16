import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api';
import { formatRelative } from "date-fns";

import usePlacesAutoComplete, {
    getGeocode,
    getLatlng,
} from 'use-places-autocomplete'

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
        // this.map must be passed through props or state
    }
}

export default GoogleMap;