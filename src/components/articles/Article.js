import React, { Component } from "react";

import "./sass/Article.sass";

export default class Article extends Component {
    render() {
        return <div className="article">{this.props.children}</div>;
    }
}
