import React, { PropsWithChildren } from "react";

import styles from "./sass/Definition.module.sass";

type DefinitionProps = PropsWithChildren<{}>;

export default function Definition(props: DefinitionProps) {
    return <span className={styles.definition}>{props.children}</span>;
}
