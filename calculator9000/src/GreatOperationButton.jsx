import React from 'react';


const GreatOperationButton = (props) => {


    return (
        <div className="operators">
            <button onClick={() => props.updateCalc('/')}>/</button>
            <button onClick={() => props.updateCalc('*')}>*</button>
            <button onClick={() => props.updateCalc('+')}>+</button>
            <button onClick={() => props.updateCalc('-')}>-</button>

            <button onClick={() => props.deleteLast()}>DEL</button>

        </div>
    );
}

export default GreatOperationButton;
