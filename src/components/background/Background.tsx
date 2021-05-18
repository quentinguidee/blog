import React from "react";

import styles from "./sass/Background.module.sass";

type BackgroundProps = {
    noCredits?: boolean;
    from?: string;
    fromURL?: string;
    image: string;
};

export default function Background(props: BackgroundProps) {
    let credits;

    if (!props.noCredits) {
        credits = (
            <div className={styles.credits}>
                Image by {props.from} from{" "}
                <a
                    style={{ color: "inherit" }}
                    href={props.fromURL}
                    target="_blank"
                    rel="noreferrer"
                >
                    Unsplash
                </a>
                .
            </div>
        );
    }

    return (
        <React.Fragment>
            <div
                className={styles.background}
                style={{ backgroundImage: `url(${props.image})` }}
            ></div>
            {credits}
        </React.Fragment>
    );
}
