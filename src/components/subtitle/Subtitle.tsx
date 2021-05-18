import React from "react";

import styles from "./sass/Subtitle.module.sass";

type SubtitleProps = {
    text: string;
};

export default function Subtitle(props: SubtitleProps) {
    return <h3 className={styles.subtitle}>{props.text.toUpperCase()}</h3>;
}
