import React, { Component } from "react";

import "./sass/Definition.sass";

export default class Definition extends Component {
    render() {
        return <span className="definition">{this.props.children}</span>;
    }
}
