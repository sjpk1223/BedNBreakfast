@places.each do |place|
    json.set! place.id do
        json.partial! "api/places/place", place: place
    end
end