class Place < ApplicationRecord
validates :title, :lat, :lng, :seating, presence: true


def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
    .where("lng < ?", bounds[:northEast][:lng])
    .where("lat > ?", bounds[:southWest][:lat])
    .where("lng > ?", bounds[:southWest][:lng])
end

end
