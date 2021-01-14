import React, { Component } from "react";

import "./sass/Audio.sass";

export default class Audio extends Component {
    render() {
        return (
            <audio className="audio" controls>
                <source src={this.props.src} type="audio/mp3" />
                [Your browser does not support the audio element]
            </audio>
        );
    }
}
