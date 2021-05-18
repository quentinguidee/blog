import React from "react";

import styles from "./sass/Title.module.sass";

type TitleProps = {
    title: string;
    subtitle: string;
};

export default function Title(props: TitleProps) {
    return (
        <div>
            <h1 className={styles.title}>{props.title.toUpperCase()}</h1>
            <h2 className={styles.title2}>{props.subtitle.toUpperCase()}</h2>
        </div>
    );
}
