import React from "react";

import styles from "./sass/Image.module.sass";

type ImageProps = {
    height: number;
    alt: string;
    src: string;
};

export default function Image(props: ImageProps) {
    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                style={{
                    maxHeight: props.height ? props.height + "px" : "inherit",
                }}
                alt={props.alt}
                src={props.src}
            />
        </div>
    );
}
