import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from './index_item';


class Index extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        const count = Object.keys(this.props.places).length;
        const benches = Object.keys(this.props.places).map(placeId => (
            <IndexItem
                place={this.props.places[placeId]}
                key={placeId}
            />
        ))
        const display = PlaceCount > 0 ? (
            <div>
                <h1>Places: </h1>
                <ul>{Places}</ul>
            </div>
        ) : (
                <h1>No Places</h1>
            );

        return (
            <>
                {display}
            </>
        );
    }
}

export default Index;