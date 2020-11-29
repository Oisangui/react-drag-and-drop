import React, {useEffect, useState} from 'react';
import DraggableSquare from './DraggableSquare';

function SquareContainer(props){
    const { i, j, data} = props;
    const style = {
        display: `flex`,
        backgroundColor: `oldlace`,
        margin:0,
    }
    const handleDrop = function(e){
        e.preventDefault();
        //e.currentTarget.style.fontSize='30px';
        const droppedData = JSON.parse(e.dataTransfer.getData('application/json'));
        e.position = `${i},${j}`;
        e.data = droppedData;
        e.current = data
        e.currentTarget.style.backgroundColor='OldLace';
    }
    if (data) {
        return (
            <div
            style={style}
            onDragOver={(e)=>{
                e.preventDefault();
                e.currentTarget.style.backgroundColor='Moccasin';
                // Do some visual effect.
            }}
            onDragLeave={(e)=>{
                e.currentTarget.style.backgroundColor='OldLace';
                // Do some visual effect.
            }}
            onDrop={handleDrop}
            >
                <DraggableSquare data={data}/>
            </div>
        );
    }
    return (
        <div
        style={style}
        onDragOver={(e)=>{
            e.preventDefault();
            e.currentTarget.style.backgroundColor='Moccasin';
            // Do some visual effect.
        }}
        onDragLeave={(e)=>{
            e.currentTarget.style.backgroundColor='OldLace';
            // Do some visual effect.
        }}
        onDrop={handleDrop}
        >
            {`${data}`}
        </div>
    );
}

export default SquareContainer;