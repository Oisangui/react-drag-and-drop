import React from 'react';
import DragSource from './DragSource';

function DragSourceCont(props){
    const { data } = props;
    console.log(data);
    console.log('rendering source cont')
    return (
        <div>
            <p>Drag an element</p>
            <DragSource data={data}/>
        </div>
    );
}

export default DragSourceCont;
    