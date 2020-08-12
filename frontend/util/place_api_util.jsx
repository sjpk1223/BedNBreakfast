export const fetchPlaces = (bounds) => {
    return $.ajax({
        method: 'GET',
        url: '/api/places',
        error: (err) => console.log(err),
        data: bounds
    })
}

export const fetchPlace = (placeId) => {
    return $.ajax({
        url: `/api/places/${placeId}`
    })
}

export const postPlace = (placeForm) => {
    return $.ajax({
        method: 'POST',
        url: `/api/places`,
        data: placeForm,
        processData: false,
        contentType: false,
    })
}