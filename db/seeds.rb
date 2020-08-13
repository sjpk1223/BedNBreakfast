# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Place.delete_all
p1 = Place.create!([{ title: 'Joshs Place', lng: 88.33,  lat: 12.22, seating: 8 }])
p2 = Place.create!([{ title: 'Joes Place', lng: 68.39,  lat: 13.02, seating: 8 }])
p3 = Place.create!([{ title: 'Johns Place', lng: 8.26,  lat: 2.00, seating:4 }])