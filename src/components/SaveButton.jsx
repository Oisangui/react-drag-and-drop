import React from 'react';

function SaveButton(props){
    const { exportFunctionality } = props;
    const handleClick = function(){
        const data = exportFunctionality();
        console.log('save data NOT IMPLEMENTED');
    }
    return (
        <div>
            <button 
            onClick={handleClick}
            >\
            Export JSON
            </button>
        </div>
    );
}

export default SaveButton;
    