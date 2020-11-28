import React, { useEffect, useState } from 'react';
import DraggableSquare from './DraggableSquare';

function DragSource(props){
    const { data } = props;
    const [ squares, setSquares ] = useState([]);
    const loadSquares = function(){
        const squares = [];
        let i = 0;
        data.data.forEach(
            (d) => {
                squares.push(
                    <DraggableSquare data={d} key={`${i}`}/>
                );
                i++;
            }
        );
        setSquares(squares);
    }
    useEffect(loadSquares, []);
    console.log('rendering source')
    return (
        <div className="drag-source">
            {squares}
        </div>
    );
}

export default DragSource;
    