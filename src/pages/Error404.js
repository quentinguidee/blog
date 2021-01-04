import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Error404 extends Component {
    render() {
        return (
            <div className="error404">
                404
                <Link className="error404__link" to="/">
                    Go home
                </Link>
            </div>
        );
    }
}
