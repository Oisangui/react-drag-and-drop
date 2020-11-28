import React from 'react';
import MySquare from './MySquare';

function DraggableSquare(props){
    const { data } = props;
    return (
        <div>
            <MySquare {...data}/>
        </div>
    );
}

export default DraggableSquare;
    