import React, {Component} from "react";

class Welcome extends Component {
    render() {
        return (
            <h1>Welcome { this.props.name}! How are your {this.props.testname}?</h1>
        )
    }
}

export default Welcome