import React, { Component } from "react";
import Title from "../components/articles/Title";
import Card, { Cards } from "../components/home/Card";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
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
                </Cards>
            </div>
        );
    }
}
