import React, { Component } from "react";

import Article from "../components/articles/Article";
import Background from "../components/articles/Background";
import Image from "../components/articles/Image";
import Subtitle from "../components/articles/Subtitle";
import Text from "../components/articles/Text";
import Title from "../components/articles/Title";
import Code from "../components/articles/Code";
import Definition from "../components/articles/Definition";

import MPU from "../images/mpu.png";
import DroneGravity from "../images/drone-gravity.png";
import DroneGravityTurn from "../images/drone-gravity-turn.png";

import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export default class Episode4 extends Component {
    render() {
        return (
            <Article author="Quentin Guidée" date="18/01/2021">
                <Title
                    title="épisode 4"
                    subtitle="Accéléromètre et gyroscope"
                />
                <Background image={MPU} noCredits />
                <Subtitle text="Intro" />
                <Text>
                    Dans cet épisode, on va enfin s'atteler à une des parties
                    les plus intéressantes des drones : leur stabilisation. Mais
                    vous concevez qu'on est face à un problème majeur ! Si on
                    bouge le drone, nous on sait qu'on l'a bougé. Lui pas...
                </Text>
                <Text>
                    On va donc ajouter les premiers capteurs à notre drone : un
                    accéléromètre et un gyroscope.
                </Text>
                <Text>
                    <ul>
                        <li>
                            Accéléromètre : c'est un capteur qui nous permet de
                            connaitre l'accélération du drone en tout temps
                            (exprimée en <InlineMath>g</InlineMath>) (rappel:{" "}
                            <InlineMath>1g=9,81m/s^2</InlineMath>);
                        </li>
                        <li>
                            Gyroscope : c'est un capteur qui nous permet de
                            connaitre la vitesse angulaire du drone en tout
                            temps (exprimée en <InlineMath>deg/s</InlineMath>).
                        </li>
                    </ul>
                </Text>
                <Subtitle text="Le MPU-9250" />
                <Text>
                    Pour notre drone, nous utiliserons un Groove MPU-9250. En
                    plus de disposer d'un accéléromètre et d'un gyroscope, il
                    est aussi doté d'un magnétomètre dont nous pourrions nous
                    servir plus tard.
                </Text>
                <Image height="400" src={MPU} />
                {/** PHOTO MPU 9250 */}
                <Text>On peut le connecter assez simplement à l'Arduino :</Text>
                {/** PHOTO MPU 9250 BRANCHE SUR ARDUINO */}
                <Text>
                    J'ai décidé d'installer la librairie{" "}
                    <Definition>MPU9250_asukiaaa</Definition> afin de
                    communiquer avec ce composant depuis le code. Mais
                    attention, la librairie ne va faire que lire les données
                    brutes du capteur. Des maths resteront à faire !
                </Text>
                <Subtitle text="L'accéléromètre" />
                <Text>
                    Dans un premier temps, on va essayer de calculer
                    l'accélération du drone. On va donc utiliser
                    l'accéléromètre. Récupérons ses données brutes grâce à la
                    librairie :
                </Text>
                <Code
                    code={
                        "float accX = sensor.accelX();\nfloat accY = sensor.accelY();\nfloat accZ = sensor.accelZ();"
                    }
                    language="cpp"
                />
                <Text>
                    Maintenant, si on lance le drone avec l'accéléromètre bien à
                    plat, et si on affiche les accélérations dans la console, on
                    va voir un résultat relativement inattendu :
                </Text>
                <BlockMath>
                    {
                        "\\left(\\begin{array}{c}acc_x\\\\ acc_y\\\\ acc_z\\end{array}\\right) = \\left(\\begin{array}{c}0,02\\: g\\\\ 0,03\\: g\\\\ 1,02\\: g\\end{array}\\right)"
                    }
                </BlockMath>
                <Text>
                    On voit directement un problème. Le drone ne bouge pas, et
                    pourtant on voit des imperfections dans les mesures. Par
                    exemple, le <InlineMath>0,02</InlineMath> devrait être un{" "}
                    <InlineMath>0</InlineMath> car il n'accélère pas dans le
                    sens des X.
                </Text>
                <Text>
                    Remarque : le <InlineMath>1</InlineMath> pour la composante
                    Z est tout à fait normal. C'est la gravité.
                </Text>
                <Text>
                    Il faudra donc calibrer le MPU-9250 à{" "}
                    <InlineMath>(0,0,1)</InlineMath> au démarrage du drone !
                    C'est une étape très importante, sinon le drone volera
                    difficilement droit !
                </Text>
                <Text>
                    Personnellement, pour calibrer l'accéléromètre, je prend 100
                    mesures espacées de 10 millisecondes au démarrage du drone.
                    La médiane de ces mesures triées détermine l'erreur
                    "moyenne" du capteur.
                </Text>
                <Text>
                    Le processus de calibration prendra donc 1 seconde à chaque
                    allumage du drone (car{" "}
                    <InlineMath>100\cdot 10ms</InlineMath>
                    ). On peut surement diminuer le nombre d'échantillons pour
                    diminuer ce temps, mais je préfère avoir la mesure la plus
                    fiable possible pour commencer, quitte à diminuer plus tard.
                </Text>
                <Subtitle text="Le gyroscope" />
                <Text>
                    Avant toute chose, le gyroscope doit lui aussi subir une
                    calibration. On utilisera exactement la même méthode que
                    celle utilisée pour l'accéléromètre.
                </Text>
                <Text>
                    Les données en <InlineMath>deg/s</InlineMath> sont donc
                    calibrées, mais on va aussi avoir besoin de l'angle brut du
                    drone. L'angle n'est pas donné par le gyroscope directement,
                    mais on va pouvoir le calculer. Voici comment :
                </Text>
                <Text>
                    Devinons intuitivement d'abord. On va prendre par exemple la
                    composante X de la rotation. Si le drone fait une rotation
                    de <InlineMath>5deg/s</InlineMath> pendant 2 secondes, il a
                    une inclinaison finale de <InlineMath>10 deg</InlineMath>,
                    car
                </Text>
                <BlockMath>2s\cdot 5 deg/s = 10 deg</BlockMath>
                <Text>
                    Après ça, s'il s'incline encore de{" "}
                    <InlineMath>3 deg/s</InlineMath> pendant 1 seconde, il va
                    former un angle de <InlineMath>13 deg</InlineMath>, car
                </Text>
                <BlockMath>10deg + 1s\cdot 3 deg/s = 13 deg</BlockMath>
                <Text>
                    On finit par deviner que, pour calculer l'angle du drone, il
                    faudra rafraichir en boucle son angle avec quelque chose
                    comme ça :
                </Text>
                <BlockMath>
                    {
                        "\\alpha_{new} = \\alpha + \\dot{\\alpha} \\cdot \\Delta t"
                    }
                </BlockMath>
                <Text>
                    où <InlineMath>\Delta t</InlineMath> est le temps qui s'est
                    écoulé entre la dernière mesure et la mesure actuelle. En
                    C++, ça donnera :
                </Text>
                <Code
                    code={
                        "float newAngleX = angleX + (sensor.getAngleSpeedX() * deltaTime);\nfloat newAngleY = angleY + (sensor.getAngleSpeedY() * deltaTime);"
                    }
                    language="cpp"
                />
                <Text>
                    Hélas, ce n'est pas aussi simple :/ On va encore faire face
                    à une imprécision... Le gyroscope est très bon pour calculer
                    l'angle formé à court terme, mais pas à long terme. L'angle
                    théorique va vite diverger de sa vraie valeur.
                </Text>
                <Subtitle text="Corrections" />
                <Text>
                    Pour corriger son inclinaison théorique à long terme, il y a
                    moyen de calculer son angle avec… l'accéléromètre !
                </Text>
                <Text>
                    On n'avait pas dit que l'accéléromètre permettait de
                    déterminer son accélération, et le gyroscope sa vitesse
                    angulaire ?
                </Text>
                <Text>
                    Oui, ça peut sembler contre-intuitif, mais regardez ! On va
                    schématiser notre drone immobile et les données de son
                    accéléromètre :
                </Text>
                <Image height="220" src={DroneGravity} />
                <Text>
                    Vous voyez peut être où je veux en venir. Même si le drone
                    ne bouge pas, la composante d'accélération en Z prend en
                    compte la gravité !
                </Text>
                <Text>Maintenant, si on représente le drone incliné :</Text>
                <Image height="250" src={DroneGravityTurn} />
                <Text>
                    La gravité s'est répartie sur deux axes ! On peut donc
                    utiliser ce phénomène pour connaitre notre inclinaison.
                </Text>
                <Text>On va calculer les angles du drone comme ceci :</Text>
                <BlockMath>
                    {
                        "\\alpha_{x} = Arctan\\left(\\frac{acc_x}{\\sqrt{acc_x^2+acc_z^2}}\\right)"
                    }
                </BlockMath>
                <BlockMath>
                    {
                        "\\alpha_{y} = Arctan\\left(\\frac{-acc_y}{\\sqrt{acc_y^2+acc_z^2}}\\right)"
                    }
                </BlockMath>
                <Text>
                    Maintenant, on peut donc effectuer une correction des
                    valeurs :
                </Text>
                <Code
                    code={
                        "float newAngleX = 0.995 * (angleX + (sensor.getAngleSpeedX() * deltaTime)) + (0.005 * sensor.getAngleXFromAccelerometer());\nfloat newAngleY = 0.995 * (angleY + (sensor.getAngleSpeedY() * deltaTime)) + (0.005 * sensor.getAngleYFromAccelerometer());"
                    }
                    language="cpp"
                />
                <Text>
                    Ce qu'on a fait ici, c'est prendre 99,5% de l'angle calculé
                    par le gyroscope (précis à court terme), et le corriger au
                    fur et à mesure par 0,05% de l'angle déterminé grâce à la
                    gravité terrestre.
                </Text>
                <Subtitle text="Essai avec un Servo" />
                <Text>
                    Après avoir affiché les valeurs de l'accéléromètre et du
                    gyroscope dans la console pour m'assurer que tout
                    fonctionne, j'ai voulu tester la réactivité des capteurs et
                    du programme. Il y avait plusieurs manières de tester ça,
                    mais pour s'amuser, j'ai choisi de brancher un servo. C'est
                    un moteur qui tourne de 0 à 180°.
                </Text>
                <Text>
                    J'ai fait en sorte que le moteur décrive le même angle que
                    celui de l'axe X du drone.
                </Text>
                <Text>Tout a l'air très réactif !</Text>
                <Subtitle text="Conclusion" />
                <Text>
                    A la fin de cet épisode, on a enfin un capteur qui permet de
                    calculer :
                </Text>
                <Text>
                    <ul>
                        <li>
                            Les accélérations{" "}
                            <InlineMath>(acc_x, acc_y, acc_z)</InlineMath> grâce
                            à l'accéléromètre
                        </li>
                        <li>
                            Les vitesses des angles{" "}
                            <InlineMath>
                                (\dot\alpha_x, \dot\alpha_y, \dot\alpha_z)
                            </InlineMath>{" "}
                            grâce au gyroscope
                        </li>
                        <li>
                            Les angles{" "}
                            <InlineMath>
                                (\alpha_x, \alpha_y, \alpha_z)
                            </InlineMath>{" "}
                            grâce au gyroscope et à une correction apportée par
                            l'accéléromètre
                        </li>
                    </ul>
                </Text>
            </Article>
        );
    }
}
