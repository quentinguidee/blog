import React from "react";

import Article from "../components/article/Article";
import Background from "../components/background/Background";
import Image from "../components/image/Image";
import Subtitle from "../components/subtitle/Subtitle";
import Text from "../components/text/Text";
import Title from "../components/title/Title";
import Code from "../components/code/Code";
import Audio from "../components/audio/Audio";

import Button from "../images/button.png";
import ButtonCircuitPhoto from "../images/button-circuit-photo.png";
import LED from "../images/led-photo.png";
import LEDRGB from "../images/led-rgb-photo.png";
import LEDsMoteurs from "../images/leds-moteurs-photo.png";
import LEDStatutOff from "../images/led-rgb-photo-off.png";
import LEDStatutOn from "../images/led-rgb-photo-on.png";
import Piezo from "../images/piezo.png";
import PiezoCircuit from "../images/piezo-circuit.png";

import PiezoAudio from "../audio/piezo.mp3";

export default function Episode3() {
    return (
        <Article author="Quentin Guidée" date="14/01/2021">
            <Title title="épisode 3" subtitle="LEDS et on/off" />
            <Background image={PiezoCircuit} noCredits />
            <Subtitle text="Intro" />
            <Text>
                Dans cet épisode, on va commencer à créer le drone. On va
                commencer par des composants de base pour faire un bouton
                on/off, des LEDs sous chaque moteur et une LED de statut. C'est
                parti !
            </Text>
            <Subtitle text="Le bouton on/off" />
            <Text>
                Commençons par le bouton pour allumer et éteindre le drone.
            </Text>
            <Image height={400} src={Button} alt="button" />
            <Text>
                En fait, un bouton, c'est simplement quelque chose qui se place
                entre deux fils. Si on appuie, le courant passe, et si on
                n'appuie pas, le courant ne passe pas. Autrement dit, quand on
                appuie, les deux fils de part et d'autre du bouton se touchent.
                Sur la photo, les deux fils sont les fils jaunes.
            </Text>
            <Image height={400} src={ButtonCircuitPhoto} alt="button circuit" />
            <Text>
                En fait, le premier fil (le tout petit) sort tout droit du 5
                volts de l'Arduino. Si on appuie sur le bouton, le courant
                passera dans le deuxième fil jaune qui retourne directement vers
                l'Arduino à la PIN 52. Quand la PIN 52 reçoit le 5V en retour,
                elle sait que le bouton a été actionné.
            </Text>
            <Text>
                Maintenant, il faut coder. Au démarrage de l'Arduino, elle doit
                savoir qu'elle doit attendre un signal entrant de la PIN 52. On
                fera comme suit dans la fonction setup de l'Arduino :
            </Text>
            <Code code="pinMode(52, INPUT);" language="cpp" />
            <Text>
                Et pour lire un signal venant de cette PIN, il faut utiliser
                ceci :
            </Text>
            <Code
                code="digitalRead(pin); // Retourne un int qui vaut 1 ou 0"
                language="cpp"
            />
            <Text>
                Avec ceci, il suffit maintenant d'inverser une variable
                booléenne (1/0) à chaque clic sur le bouton.
            </Text>
            <Text>
                Mais bon. C'est bien beau mais on ne sait pas voir si ça
                marche... Pour cela, on va commencer les LEDs qui seront placées
                sous les moteurs.
            </Text>
            <Subtitle text="Les LEDs sous les moteurs" />
            <Text>
                Bon. Le comportement n'est pas définitif, mais commençons avec
                ça : quand on allume le drone, les LEDs des moteurs vont
                s'allumer (et inversement).
            </Text>
            <Text>
                Une LED, c'est assez simple. C'est une diode qui s'allume
                lorsqu'elle reçoit une différence de potentiel assez élevée
                entre ses deux pattes (tension de seuil).
            </Text>
            <Image height={400} src={LED} alt="led" />
            <Text>
                Attention, elle a un sens ! Ne pas le respecter rend la LED
                inutile ou peut la faire cramer !
            </Text>
            <Text>
                Bon. Pour le drone, on va donc connecter 4 pins de l'Arduino (22
                à 25) aux 4 LEDs. J'aurais pu ne faire sortir qu'une seule PIN
                vers les 4 LEDs directement, mais les LEDs servent justement à
                indiquer le statut de chacun des moteurs séparément.
            </Text>
            <Text>
                Faisons le petit circuit, et assurons-nous que cliquer sur le
                bouton allume bien les 4 LEDs jaunes !
            </Text>
            <Image height={400} src={LEDsMoteurs} alt="leds moteurs" />
            <Text>Spoiler ça marche.</Text>
            <Text>
                Le code reste très simple. Pour dire à l'Arduino qu'une PIN sert
                à sortir un courant et non à le faire entrer comme avec le
                bouton, on utilise :
            </Text>
            <Code code="pinMode(22, OUTPUT);" language="cpp" />
            <Text>Et pour allumer/éteindre la LED :</Text>
            <Code
                code={
                    "digitalWrite(22, HIGH); // Allumer\ndigitalWrite(22, LOW); // Eteindre"
                }
                language="cpp"
            />
            <Subtitle text="LED de statut" />
            <Text>
                Pour la LED de statut, nous utiliserons une LED RGB. Chaque
                couleur qu'elle indiquera correspondra à un statut (allumé,
                éteint, erreur...). Dans un premier temps, rouge pour éteint,
                orange pour "en cours d'allumage" et vert pour allumé.
            </Text>
            <Text>
                Une LED RGB, c'est comme 3 LEDs (une rouge, une verte et une
                bleue) combinées en une. Chacune des 3 pattes correspond à une
                couleur (rouge, vert, bleu) (et la 4e sert à donner le "0V" pour
                la différence de potentiel).
            </Text>
            <Image height={400} src={LEDRGB} alt="LED RGB" />
            <Text>
                Le code fonctionne de manière similaire à celui pour une LED,
                sauf qu'on a 3 sorties. Nuance aussi assez importante : pour
                faire varier les couleurs, à la place de dire "allumé/éteint"
                comme pour une LED normale, on peut lui appliquer à chaque patte
                une différence de potentiel plus ou moins importante. C'est ce
                qui fera varier la couleur.
            </Text>
            <Text>
                Donc, à la place du digitalWrite, on utilisera l'analogWrite (où
                red/green/blue seront des chiffres entre 0 et 255) :
            </Text>
            <Code
                code={`analogWrite(redPin, red);\nanalogWrite(greenPin, green);\nanalogWrite(bluePin, blue);`}
                language="cpp"
            />
            <Text>Plus qu'à coder ça et à tester !</Text>
            <Image height={400} src={LEDStatutOff} alt="LED status off" />
            <Image height={400} src={LEDStatutOn} alt="LED status on" />
            <Text>Merveilleux !</Text>
            <Subtitle text="Bonus : le Piezo" />
            <Text>
                On va ajouter un petit "sonar" au drone, de manière à jouer un
                petit son agaçant à son allumage :)
            </Text>
            <Image height={400} src={Piezo} alt="Piezo" />
            <Text>
                Pour l'allumer, il faut lui communiquer une fréquence. C'est sa
                fréquence qui va déterminer la note de musique qu'on va lui
                faire jouer. Ce composant s'utilise comme suit :
            </Text>
            <Code
                code={
                    "tone(53, frequency); // Fait sonner à une fréquence précise\nnoTone(53); // Arrête de sonner"
                }
                language="cpp"
            />
            <Text>
                On entendra ça à chaque allumage à partir de maintenant…
            </Text>
            <Audio src={PiezoAudio} />
            <Image height={400} src={PiezoCircuit} alt="Piezo circuit" />
            <Subtitle text="Conclusion" />
            <Text>
                Bon. On a bien avancé à nouveau. On a donc fait un bouton
                on/off, les 4 LEDs des moteurs, et une LED de statut globale.
            </Text>
            <Text>
                Prochaine fois, on va enfin voir quelque chose de plus complexe
                : un capteur essentiel à la stabilisation du drone !
            </Text>
        </Article>
    );
}
