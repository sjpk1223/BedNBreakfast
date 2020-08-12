class Api::PlacesController < ApplicationController

    def index
        @places =  params[:bounds] ? Place.in_bounds(params[:bounds]) : Place.all

        render :index
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
        params.require(:place).permit(:name, :user_id, :description, :price, :num_beds, :num_bedrooms, :num_bathrooms, :max_occupancy, :latitude, :longitude)
    end

end