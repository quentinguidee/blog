import React, { Component } from "react";

import "./sass/Background.sass";

export default class Background extends Component {
    render() {
        return (
            <div
                className="background"
                style={{ backgroundImage: `url(${this.props.image})` }}
            ></div>
        );
    }
}
