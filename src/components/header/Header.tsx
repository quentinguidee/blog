import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import styles from "./sass/Header.module.sass";

type HeaderProps = PropsWithChildren<{}>;

export default function Header(props: HeaderProps) {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                Quentin Guidée
            </Link>
            {props.children}
        </header>
    );
}
