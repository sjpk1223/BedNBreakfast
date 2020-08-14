import React from 'react';

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect() {
        this.props.clearEntity();
        this.props.history.push('./places/' + this.props.id)
    }

    render() {

        return (
            <li>{this.props.place.title}</li>
        )
    }
}
export default IndexItem;