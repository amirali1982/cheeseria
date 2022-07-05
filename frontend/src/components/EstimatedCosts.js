import {Component} from "react";

class EstimatedCosts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div><h4>Estimated Cost: {this.props.value}</h4></div>);

    }
}

export default EstimatedCosts;