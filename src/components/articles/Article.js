import React, { Component } from "react";
import Author from "./Author";
import Footer from "./Footer";
import Header from "./Header";

import "./sass/Article.sass";

export default class Article extends Component {
    render() {
        return (
            <div className="article">
                <Header>Création d'un quadcopter</Header>
                {this.props.children}
                <Author
                    author={this.props.author}
                    link="https://github.com/quentinguidee"
                    date={this.props.date}
                />
                <Footer
                    author={this.props.author}
                    link="https://github.com/quentinguidee"
                />
            </div>
        );
    }
}
