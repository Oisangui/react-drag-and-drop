import React from 'react';
import DragTarget from './DragTarget';

function DragTargetCont(props){
    const { data } = props;
    console.log('rendering target cont')
    return (
        <div>
            <p>Drag here to create your layout</p>
            <DragTarget {...data}/>
        </div>
    );
}

export default DragTargetCont;
    