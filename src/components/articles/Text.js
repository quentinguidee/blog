import React, { Component } from "react";

import "./sass/Text.sass";

export default class Text extends Component {
    render() {
        return <div className="text">{this.props.children}</div>;
    }
}
