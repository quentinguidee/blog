import React from "react";

import styles from "./sass/Audio.module.sass";

type AudioProps = {
    src: string;
};

export default function Audio(props: AudioProps) {
    return (
        <audio className={styles.audio} controls>
            <source src={props.src} type="audio/mp3" />
            [Your browser does not support the audio element]
        </audio>
    );
}
