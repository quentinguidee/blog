import React, { Component } from "react";
import Article from "../components/articles/Article";
import Background from "../components/articles/Background";
import Definition from "../components/articles/Definition";
import Header from "../components/articles/Header";
import Image from "../components/articles/Image";
import Subtitle from "../components/articles/Subtitle";
import Text from "../components/articles/Text";
import Title from "../components/articles/Title";

import DrawingImage from "../images/drawing.png";

export default class Episode1 extends Component {
    render() {
        return (
            <Article>
                <Header>Création d'un drone de A à Z</Header>
                <Title title="épisode 1" subtitle="Conception" />
                <Background
                    image="https://unsplash.com/photos/4UGmm3WRUoQ/download?force=true"
                    from="sigmund"
                    fromURL="https://unsplash.com/@sigmund"
                />
                <Subtitle text="L'idée" />
                <Text>
                    Je passe mes journées à développer des trucs, mais jusqu'ici
                    je ne m’étais jamais intéressé au{" "}
                    <Definition>hardware</Definition>. C’est le moment de se
                    lancer ! Souci : aucune idée de projet, comme d’hab… Allumer
                    une LED ? Ouais on va pas faire avancer le monde avec une
                    LED…
                </Text>
                <Text>
                    Puis là, lumière ! Go faire un drone. C’est trop compliqué ?
                    Peut être pas tant que ça…
                </Text>
                <Text>
                    C’est suite à cette réflexion lumineuse que je me suis lancé
                    dans la création d’un drone.
                </Text>
                <Subtitle text="Le drone : objectif" />
                <Text>
                    Le drone que l'on va construire se démarquera de la
                    concurrence <Definition>open source</Definition> avec ceci :
                </Text>
                <Text>
                    <ul>
                        <li>Il sera extrêmement stable, même face au vent ;</li>
                        <li>
                            Il sera doté d'une série d'actions très pratiques
                            (aterrissage et décollage 100% automatique,
                            atterrissage sécurisé en cas de déconnexion de
                            l'émetteur…) ;
                        </li>
                        <li>Il aura une structure "fait maison".</li>
                    </ul>
                </Text>
                <Subtitle text="A quoi ressemblera-t-il ?" />
                <Text>
                    Nous allons construire un{" "}
                    <Definition>Quadcopter</Definition>. Le premier prototype
                    visera quelque chose de ce genre :
                </Text>
                <Image height="320" alt="Image du drone" src={DrawingImage} />
                <Text>
                    On a, entre autre, une batterie amovible au dessus, une
                    caméra à l'avant (qui sera réalisée très tard dans le
                    projet), une LED de status au dessus avec un bouton on/off,
                    des LEDs sous les moteurs…
                </Text>
                <Text>
                    Bien sûr, ce croquis subira de très nombreuses modifications
                    au cours du projet. Son but est vraiment d'avoir une
                    première idée pour ne pas trop se lancer à l'aveugle.
                </Text>
                <Subtitle text="Comment va-t-on s'y prendre ?" />
                <Text>
                    Pour ce projet, il faudra s'y prendre comme il faut. En
                    effet, tout semble très complexe à priori. Mais en
                    décomposant le drone composant par composant, tout sera
                    beaucoup plus simple.
                </Text>
                <Text>
                    Le drone sera d'abord construit sur une structure
                    extrêmement simplifiée destinée à un premier prototypage. Le
                    projet se déroulera comme suit :
                </Text>
                <Text>
                    <ul>
                        <li>
                            D'abord, on s'occupera de tous les éléments les plus
                            simples, comme les LEDs. Commencer par ça permet de
                            déjà poser la structure du code et d'avoir une
                            approche simplifiée de l'électronique.
                        </li>
                        <li>
                            Ensuite, on s'occupera de toute la partie en vol.
                        </li>
                        <li>
                            Une fois ceci fait, le prototype est donc terminé.
                            On s'occupera alors de créer le produit fini, c'est
                            à dire la structure extérieure, simplifier certaines
                            choses, améliorer des parties un peu brouillon…
                        </li>
                        <li>
                            Pour finir, on sera enfin apte à y ajouter tout ce
                            qu'on souhaite ! Des pieds ? Aller chercher de la
                            nourriture à la cuisine ? Ou même faire le café !
                        </li>
                    </ul>
                </Text>
                <Subtitle text="Episode suivant…" />
                <Text>Dans l'épisode 2, on parlera un peu du hardware ^^</Text>
            </Article>
        );
    }
}
