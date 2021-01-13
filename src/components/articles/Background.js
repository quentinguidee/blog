import React, { Component } from "react";

import "./sass/Background.sass";

export default class Background extends Component {
    render() {
        var credits;
        if (!this.props.noCredits) {
            credits = (
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
            );
        }

        return (
            <React.Fragment>
                <div
                    className="background"
                    style={{ backgroundImage: `url(${this.props.image})` }}
                ></div>
                {credits}
            </React.Fragment>
        );
    }
}
