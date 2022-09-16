import React from 'react';
import { useState } from 'react';




const AmazingNumberButton = (props) => {



    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => props.updateCalc(i)}
                    key={i}>{i}</button>
            )
        }
        return digits;
    }



    return (

        <div className="digits">
            {createDigits()}
            <button onClick={() => props.updateCalc('0')}>0</button>
            <button onClick={() => props.updateCalc('.')}>.</button>
            <button>SAVE</button>



        </div>
    );
}

export default AmazingNumberButton;
