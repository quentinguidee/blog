import React, { Component } from "react";

import "./sass/Author.sass";

export default class Author extends Component {
    render() {
        return (
            <div className="author">
                Ecrit par{" "}
                <a className="author__link" href={this.props.link}>
                    {this.props.author}
                </a>
                , le {this.props.date}.
            </div>
        );
    }
}
