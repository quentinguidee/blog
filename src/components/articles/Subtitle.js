import React, { Component } from "react";

import "./sass/Subtitle.sass";

export default class Subtitle extends Component {
    render() {
        return <h3 className="subtitle">{this.props.text.toUpperCase()}</h3>;
    }
}
