import React from "react";
import Map from '../map/map';
import GoogleMap from '../map/googlemap';
import Index from '../index/index';
import FilterForm from '../filterform/filterform';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    }
    
    render() {
      let {places, updateFilter, min_seating, max_seating} = this.props;
      return (
        <div className="splash-container">
            {/* <img className="bg-img" src={bg.scss}></img> */}
        <div className="splash-form">
          <div className="splash-form-title">
            Search for places or experiences
          </div>
          <div className="splash-search">
            <label className="splash-search-label">
              <div className="splash-search-title">Location</div>
              <input
                type="text"
                className="splash-search-input"
                placeholder="Add city, landmark, or address"
              />
            </label>
            <div className="search-table-organizer">
              <div className="splash-search-title">Check-in / Check-out</div>
              <button className="splash-dates-button" type="button">
                <div className="splash-dates-placeholder">Add dates</div>
              </button>
            </div>
            <div className="search-table-organizer">
              <div className="splash-guest-title">Guests</div>
              <button className="splash-guest-button" type="button">
                <div className="splash-guest-placeholder">Add guests</div>
              </button>
            </div>
            <button className="splash-search-button" type="button">
              Search
            </button>
          </div>
        </div>
        <GoogleMap>
          {/* <Map
            places={places}
            updateFilter={updateFilter}
          />
          <FilterForm
            min_seating={min_seating}
            max_seating={max_seating}
            updateFilter={updateFilter}
          /> */}
          <Index
            places={places}
          /> 
      </div>
    );
  }
}

export default Splash;
