import React, { Component } from "react";

import Article from "../components/articles/Article";
import Background from "../components/articles/Background";
import Definition from "../components/articles/Definition";
import Image from "../components/articles/Image";
import Subtitle from "../components/articles/Subtitle";
import Text from "../components/articles/Text";
import Title from "../components/articles/Title";
import Code from "../components/articles/Code";

import ArduinoUno from "../images/arduino-uno.png";
import ArduinoMega from "../images/arduino-mega.png";
import ArduinoCover from "../images/arduino-cover.png";
import ArduinoIDE from "../images/arduino-ide.png";
import VSCode from "../images/vscode.png";
import { atomOneDark, CopyBlock } from "react-code-blocks";

let templateCode = `void setup() {
    // Code lancé une fois au démarrage de l'Arduino
}

void loop() {
  // Code exécuté en boucle
}`;

let makefileCode = `BOARD=arduino:avr:mega:cpu=atmega2560
ARDUINO_CLI=arduino-cli
PORT=/dev/ttyACM0

all:
  \${ARDUINO_CLI} -b \${BOARD} compile

upload:
  \${ARDUINO_CLI} -b \${BOARD} -p \${PORT} upload`;

export default class Episode2 extends Component {
    render() {
        return (
            <Article author="Quentin Guidée" date="13/01/2021">
                <Title title="épisode 2" subtitle="L'arduino" />
                <Background image={ArduinoCover} noCredits />
                <Subtitle text="Intro" />
                <Text>
                    Dans cet épisode, on va commencer en douceur en découvrant
                    le composant essentiel de notre drone, son cerveau : l'
                    <Definition>Arduino</Definition>. On posera aussi les bases
                    du code. Et comme je préfère apprendre avec la pratique, on
                    ne va pas du tout rentrer dans la théorie de l'Arduino
                    aujourd'hui. On va simplement voir ce que c'est (ça risque
                    de faire chier ceux qui connaissent déjà) et on va voir ce
                    qu'on va utiliser sur le drone et pourquoi.
                </Text>
                <Subtitle text="C'est quoi ?" />
                <Text>
                    L'Arduino est une carte programmable qui se veut très utile
                    dans des projets d'électronique en phase de prototypage.
                    C'est une sorte de petit ordinateur qui va lancer un
                    programme (que l'on va écrire) pour communiquer avec les
                    composants électronique qu'on lui connecte.
                </Text>
                <Text>
                    Les cartes Arduino sont déclinées en des dizaines de modèles
                    différents, chacune ayant ses avantages et inconvénients. Le
                    modèle le plus connu est sûrement l'Arduino Uno, et elle
                    vous dira peut être quelque chose tant elle est répandue :
                </Text>
                <Image height="400" alt="Photo Arduino Uno" src={ArduinoUno} />
                <Text>
                    Elle peut faire peur à première vue, mais en réalité elle
                    est extrêmement simple à prendre en main et intuitive.
                </Text>
                <Subtitle text="Et pour le drone ?" />
                <Text>
                    Dans le cas de notre drone, nous devrons connecter un nombre
                    assez conséquent de composants à l'Arduino. Malheureusement,
                    une Arduino Uno ne nous convient pas...
                </Text>
                <Text>
                    En effet, nous allons avoir besoin d'un nombre assez
                    conséquent de pins. Les pins sont les petits trous carrés
                    répartis autour de l'Arduino qui permettent de relier les
                    composants. L'Arduino Uno n'en compte que 20 ! J'ai donc
                    décidé de partir sur une Arduino Mega à la place de la Uno,
                    qui offre 70 pins !
                </Text>
                <Image
                    height="400"
                    alt="Photo Arduino Mega"
                    src={ArduinoMega}
                />
                <Text>
                    Rassurez-vous, elle est presque identique à la Uno. En plus
                    de l'avantage cité, la Mega dispose d'une mémoire flash 8x
                    plus élevée (soit 256 KB).
                </Text>
                <Text>
                    En revanche, elle est beaucoup plus grande et lourde ! Mais
                    je considère actuellement que ce problème n'est pas très
                    grave vu que le drone que l'on va construire sera assez
                    grand (40x40cm).
                </Text>
                <Subtitle text="Les outils" />
                <Text>
                    Bon. C'est une carte programmable, donc il va falloir
                    préparer le terrain pour le code du drone.
                </Text>
                <Text>
                    On va s'y prendre correctement. Il nous faut un IDE. Il faut
                    se rappeler que le code du drone fera plusieurs milliers de
                    lignes de code, et coder dans l'IDE Arduino est juste...
                    horrible... Observez par vous-même :
                </Text>
                <Image
                    height="500"
                    alt="Capture d'écran Arduino IDE"
                    src={ArduinoIDE}
                />
                <Text>
                    Je me vois mal coder là dedans plusieurs milliers de lignes
                    sans devenir fou. On va donc partir sur notre IDE favori :
                    VSCode !
                </Text>
                <Image height="500" alt="VSCode" src={VSCode} />
                <Text>
                    On aura alors besoin d'installer l'extension{" "}
                    <a href="https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino">
                        vscode-arduino
                    </a>
                    . Elle nous permettra essentiellement d'avoir une
                    autocomplétion fiable et de ne pas se voir souligner toutes
                    les méthodes en rouge (vous voyez de quoi je parle). Elle
                    permet aussi une multitude d'autres choses dont nous ne nous
                    servirons pas.
                </Text>
                <Subtitle text="Le code de base" />
                <Text>
                    Une Arduino se code en C++. La structure de base d'un
                    programme est la suivante :
                </Text>
                <Code code={templateCode} language="cpp" />
                <Text>
                    Elle est simplement composée de deux fonctions très basiques
                    :
                </Text>
                <Text>
                    <ul>
                        <li>
                            La fonction <Definition>setup()</Definition> : elle
                            ne s'exécutera qu'une fois : au lancement de
                            l'Arduino.
                        </li>
                        <li>
                            La fonction <Definition>loop()</Definition> : comme
                            son nom l'indique, elle va s'exécuter en boucle
                            jusqu'à ce que vous éteignez l'Arduino.
                        </li>
                    </ul>
                </Text>
                <Subtitle text="Le Makefile" />
                <Text>
                    Mais maintenant, comment est-ce qu'on envoie ce code sur
                    l'Arduino Mega ?
                </Text>
                <Text>
                    On va se servir d'un outil merveilleux appelé{" "}
                    <a href="https://github.com/arduino/arduino-cli">
                        arduino-cli
                    </a>
                    . C'est un outil qui permet, entre autre, de compiler le
                    code et de l'uploader sur l'Arduino depuis le terminal. Les
                    commandes que l'on va utiliser sont les suivantes :
                </Text>
                <Text>
                    <ul>
                        <li>
                            <Definition>
                                arduino-cli -b BOARD compile
                            </Definition>{" "}
                            : ici, BOARD est à remplacer par la référence de la
                            carte, c'est-à-dire
                            "arduino:avr:mega:cpu=atmega2560" pour notre Arduino
                            Mega. "arduino-cli" est le nom de l'outil, le "-b"
                            et ce qui suit permet à arduino-cli de savoir de
                            quelle carte il s'agit, et le "compile" lui permet
                            de savoir qu'on veut compiler notre code.
                        </li>
                        <li>
                            <Definition>
                                arduino-cli -b BOARD -p PORT upload
                            </Definition>{" "}
                            : cette commande permet d'uploader le code compilé
                            sur l'Arduino. Ici, "PORT" est à remplacer par le
                            port USB de l'ordinateur sur lequel l'Arduino est
                            branché. Il peut être facilement déterminé depuis
                            l'extension Arduino sur VSCode.
                        </li>
                    </ul>
                </Text>
                <Text>
                    Mais... Ces commandes sont chiantes à rentrer à chaque fois
                    omg. On va faire un Makefile. Pour simplifier, ça nous
                    permettra notamment de faire des raccourcis vers ces
                    commandes. Taper <Definition>make</Definition> dans le
                    terminal compilera le code, et taper{" "}
                    <Definition>make upload</Definition> l'enverra sur
                    l'Arduino.
                </Text>
                <Code code={makefileCode} language="makefile" />
                <Text>
                    On a l'air bon maintenant, non ? On peut essayer de compiler
                    et d'upload, tout se passe merveilleusement bien !
                </Text>
                <Subtitle text="Conclusion" />
                <Text>
                    On a bien avancé aujourd'hui. On a donc vu l'Arduino qu'on
                    utilisera (on commence à le savoir) et les fondations du
                    code.
                </Text>
                <Text>
                    Dans l'épisode suivant, nous mettrons en place les premiers
                    composants : LEDs, LED RGB, bouton on/off...
                </Text>
            </Article>
        );
    }
}
