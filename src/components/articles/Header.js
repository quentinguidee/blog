import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./sass/Header.sass";

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link to="/" className="header__logo">
                    Quentin Guidée
                </Link>
                {this.props.children}
            </header>
        );
    }
}
