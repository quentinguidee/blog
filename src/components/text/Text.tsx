import React, { PropsWithChildren } from "react";

import styles from "./sass/Text.module.sass";

type TextProps = PropsWithChildren<{}>;

export default function Text(props: TextProps) {
    return <div className={styles.text}>{props.children}</div>;
}
