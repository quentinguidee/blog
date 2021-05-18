import React from "react";

import { CopyBlock, dracula } from "react-code-blocks";

import styles from "./sass/Code.module.sass";

type CodeProps = {
    code: string;
    language: string;
};

export default function Code(props: CodeProps) {
    return (
        <div className={styles.code}>
            <CopyBlock
                text={props.code}
                language={props.language}
                showLineNumbers={false}
                theme={dracula}
                wrapLines
            />
        </div>
    );
}
