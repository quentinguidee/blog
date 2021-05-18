import React from "react";

import Header from "../components/header/Header";
import Title from "../components/title/Title";

import Card, { Cards } from "../components/home/Card";

export default function Home() {
    return (
        <div className="home">
            <Header />
            <Title title="Articles" subtitle="Création d'un quadcopter" />
            <Cards>
                <Card
                    to="/articles/create-drone-1"
                    title="Episode 1"
                    subtitle="Conception"
                    date="03/01/2021"
                />
                <Card
                    to="/articles/create-drone-2"
                    title="Episode 2"
                    subtitle="L'Arduino"
                    date="13/01/2021"
                />
                <Card
                    to="/articles/create-drone-3"
                    title="Episode 3"
                    subtitle="LEDS et on/off"
                    date="14/01/2021"
                />
                <Card
                    to="/articles/create-drone-4"
                    title="Episode 4"
                    subtitle="Accéléro et gyro"
                    date="18/05/2021"
                />
            </Cards>
        </div>
    );
}
