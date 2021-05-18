import React from "react";

import styles from "./sass/Footer.module.sass";

type FooterProps = {
    link: string;
    author: string;
};

export default function Footer(props: FooterProps) {
    return (
        <footer className={styles.footer}>
            ©2021{" "}
            <a className={styles.link} href={props.link}>
                {props.author}
            </a>
            . All rights reserved.
        </footer>
    );
}
