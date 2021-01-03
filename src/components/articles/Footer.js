import React, { Component } from "react";

import "./sass/Footer.sass";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__copyright">
                    ©2021{" "}
                    <a className="footer__link" href={this.props.link}>
                        {this.props.author}
                    </a>
                    . All rights reserved.
                </div>
            </footer>
        );
    }
}
