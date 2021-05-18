import React, { PropsWithChildren } from "react";

import Author from "./../author/Author";
import Footer from "./../footer/Footer";
import Header from "./../header/Header";

import styles from "./sass/Article.module.sass";

type ArticleProps = PropsWithChildren<{
    author: string;
    date: string;
}>;

export default function Article(props: ArticleProps) {
    return (
        <div className={styles.article}>
            <Header>Création d'un quadcopter</Header>
            {props.children}
            <Author
                author={props.author}
                link="https://github.com/quentinguidee"
                date={props.date}
            />
            <Footer
                author={props.author}
                link="https://github.com/quentinguidee"
            />
        </div>
    );
}
