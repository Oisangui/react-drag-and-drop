import React from 'react';

function LoadButton(props){
    const { importFunctionality } = props;
    const handleClick = function(){
        const data = JSON.parse('{}');
        console.log('load data NOT IMPLEMENTED');
        importFunctionality(data);
    }
    return (
        <div>
            <button 
            onClick={handleClick}
            >\
            Import JSON
            </button>
        </div>
    );
}

export default LoadButton;
    