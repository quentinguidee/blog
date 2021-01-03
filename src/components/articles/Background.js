import React, { Component } from "react";

import "./sass/Background.sass";

export default class Background extends Component {
    render() {
        return (
            <React.Fragment>
                <div
                    className="background"
                    style={{ backgroundImage: `url(${this.props.image})` }}
                ></div>
                <div className="background__credits">
                    Image by {this.props.from} from{" "}
                    <a
                        style={{ color: "inherit" }}
                        href={this.props.fromURL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Unsplash
                    </a>
                    .
                </div>
            </React.Fragment>
        );
    }
}
