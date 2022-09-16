import React from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifulScreen from './BeautifulScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import ItsOverNineThousand from './ItsOverNineThousand';
import './index.css';
import { useState } from 'react';


const Calculator = () => {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const [result9000, setResult9000] = useState("");

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {

        // condition pour limiter le choix opérateur 
        if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        }
        setCalc(calc + value);

        // condition pour le resultat instantané entre parenthése
        if (!ops.includes(value)) {

            setResult(eval(calc + value));

        }

    }

    // calcul du résultat au click bouton =

    const calculate = () => {
        setCalc(eval(calc).toString());
        setResult9000(eval(calc));

    }

    // button pour supprimer le resultat et remettre à zéro
    const deleteLast = () => {
        setResult9000("")
        setResult("")

        console.log('r')
        if (calc == '') {
            return;

        }
        const value = calc.slice(0, -10);

        setCalc(value);

    }

    console.log(result9000);

    return (
        <div className="container">
            <div className="parent">
                {result9000 > 9000 ? (
                    <ItsOverNineThousand />
                ) : (
                    <BeautifulScreen result={result} calc={calc} />

                )

                }
                <GreatOperationButton updateCalc={updateCalc} deleteLast={deleteLast} />
                <AmazingNumberButton updateCalc={updateCalc} />
                <MagnificientEqualButton calculate={calculate} />


            </div>
        </div >
    );
}

export default Calculator;
