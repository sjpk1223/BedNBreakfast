class Api::PlacesController < ApplicationController

    def index
        @places =  params[:bounds] ? Place.in_bounds(params[:bounds]) : Place.all
        if params[:min_seating] && params[:max_seating]
             @places = @places.where(seating: seating_range)
        end
    end

    render "api/benches/index"
    end

    def show
        @place = Place.find(params[:id])
    end 

    def create
        @place = Place.create!(place_params)
       render "api/benches/show"
    end

    def place_params
        params.require(:place).permit(:title, :lat, :lng, :seating)
    end

end