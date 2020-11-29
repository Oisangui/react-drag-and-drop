import React from 'react';
import DragTarget from './DragTarget';

function DragTargetCont(props){
    const { data, actions } = props;
    return (
        <div>
            <p>Drag here to create your layout</p>
            <DragTarget {...data} actions={actions}/>
        </div>
    );
}

export default DragTargetCont;
    