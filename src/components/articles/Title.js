import React, { Component } from "react";

import "./sass/Title.sass";

export default class Title extends Component {
    render() {
        return (
            <div>
                <h1 className="title">{this.props.title.toUpperCase()}</h1>
                <h2 className="title2">{this.props.subtitle.toUpperCase()}</h2>
            </div>
        );
    }
}
