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

export default function GoogleMap() {
    const {} = useLoadScript({
        mapsApiKey: process.env.REACT_APP_MAPS_API_KEY
    })
    return <div>Map</div>;
}