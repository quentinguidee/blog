import React from "react";

import styles from "./sass/Author.module.sass";

type AuthorProps = {
    author: string;
    date: string;
    link: string;
};

export default function Author(props: AuthorProps) {
    return (
        <div className={styles.author}>
            Écrit par{" "}
            <a className={styles.link} href={props.link}>
                {props.author}
            </a>
            , le {props.date}.
        </div>
    );
}
