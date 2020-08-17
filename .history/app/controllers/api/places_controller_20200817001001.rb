class Api::PlacesController < ApplicationController

    def index
        @places =  params[:bounds] ? Place.in_bounds(params[:bounds]) : Place.all
        if params[:min_seating] && params[:max_seating]
             @benches = @benches.where(seating: seating_range)
    end

    render "api/benches/index"
    end

    def show
        @place = Place.find(params[:id])
        render :show
    end 

    def create
        @place = Place.new(place_params)
        if @place.save
            render :show
        else
            render json: @place, status: :unprocessable_entity
        end
    end

    def place_params
        params.require(:place).permit(:title, :lat, :lng, :seating)
    end

end