import React from "react";

import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="error404">
            404
            <Link className="error404__link" to="/">
                Go home
            </Link>
        </div>
    );
}
