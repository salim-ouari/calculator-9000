import React from 'react';

const MagnificientEqualButton = (props) => {
    return (
        <div className='magnific'>
            <button onClick={() => props.calculate('.')}>=</button>

        </div>
    );
};

export default MagnificientEqualButton;