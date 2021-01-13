import React, { Component } from "react";
import Gist from "react-gist";

import "./sass/Code.sass";

export default class Code extends Component {
    render() {
        return (
            <div className="code">
                <Gist id={this.props.id} file={this.props.file} />
            </div>
        );
    }
}
