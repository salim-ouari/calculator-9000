import React from 'react';


const BeautifulScreen = (props) => {


    return (
        <div className="display">
            {props.result ? <span>({props.result})</span> : ''}&nbsp;
            {props.calc || "0"}

        </div>
    );
}

export default BeautifulScreen;
