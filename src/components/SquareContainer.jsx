import React, {useState} from 'react';
import DraggableSquare from './DraggableSquare';

function SquareContainer(props){
    const [ square, setSquare ] = useState(null);
    const { i, j } = props;
    const handleDrop = function(e){
        e.preventDefault();
        e.currentTarget.style.fontSize='30px';
        const data = e.dataTransfer.getData('application/json');
        console.log(`received data:${data}`);
        setSquare(
            <DraggableSquare data={JSON.parse(data)}/>
        )
    }
    return (
        <div
        onDragOver={(e)=>{
            e.preventDefault();
            //e.currentTarget.style.fontSize='20px';
            // Do some visual effect.
        }}
        onDragLeave={(e)=>{
            //e.currentTarget.style.fontSize='10px';
            // Do some visual effect.
        }}
        onDrop={handleDrop}
        >
            {square}
        </div>
    );
}

export default SquareContainer;