import React, { Component } from "react";

import "./sass/Image.sass";

export default class Image extends Component {
    render() {
        return (
            <div className="image-container">
                <img
                    className="image"
                    style={{
                        maxHeight: this.props.height
                            ? this.props.height + "px"
                            : "inherit",
                    }}
                    alt={this.props.alt}
                    src={this.props.src}
                />
            </div>
        );
    }
}
