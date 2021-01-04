import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./sass/Card.sass";

export class Cards extends Component {
    render() {
        return <div className="cards">{this.props.children}</div>;
    }
}

export default class Card extends Component {
    render() {
        return (
            <Link className="card" to={this.props.to}>
                <span className="card__title">
                    {this.props.title.toUpperCase()}
                </span>
                <span className="card__subtitle">
                    {this.props.subtitle.toUpperCase()}
                </span>
                <span className="card__date">{this.props.date}</span>
            </Link>
        );
    }
}
