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

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from '@reach/Combobox'

import "@reach/combobox/style.css"

const libraries = ["places"]
const mapContainerStyle = {
    width:'100vw',
    height:'100vh',
}

export default function GoogleMap() {
    const { isLoaded, loadError } = useLoadScript({
        mapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        libraries
        // must load other libraries while loading script
        //
    })
    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading maps"
    return <div>
        <GoogleMap mapContainerStyle={mapContainerStyle}>

        </GoogleMap>
    </div>;
}