import React from "react";
import { Link } from "react-router-dom";

import styles from "./sass/Card.module.sass";

export function Cards(props: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={styles.cards} />;
}

type CardProps = {
    to: string;
    title: string;
    subtitle: string;
    date: string;
};

export default function Card(props: CardProps) {
    return (
        <Link className={styles.card} to={props.to}>
            <span className={styles.title}>{props.title.toUpperCase()}</span>
            <span className={styles.subtitle}>
                {props.subtitle.toUpperCase()}
            </span>
            <span className={styles.date}>{props.date}</span>
        </Link>
    );
}
