import React, { Component } from "react";

import "./sass/Header.sass";

export default class Header extends Component {
    render() {
        return <header className="header">{this.props.children}</header>;
    }
}
