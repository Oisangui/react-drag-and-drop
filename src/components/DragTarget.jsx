import React, { useEffect, useState } from 'react';
import SquareContainer from './SquareContainer';

function DragTarget(props){
    const { hSquares, vSquares, onOverlap } = props;
    const [ squares, setSquares ] = useState([]);
    const loadSquares = function(){
        const squares = [];
        for (let i=0;i<hSquares;i++){
            for (let j=0;j<vSquares;j++){
                squares.push(
                    <SquareContainer i={i} j={j} key={`${i}${j}`}/>
                )
            }
        }
        setSquares(squares);
    }
    const style = {
        display: `grid`,
        gridTemplateColumns: `repeat(${hSquares}, 100px)`,
        gridTemplateRows: `repeat(${vSquares}, 100px)`,
        gap: `2px`,
    }
    useEffect(loadSquares, []);

    
    return (
        <div className="drag-target" style={style}>
            {squares}
        </div>
    );
}

export default DragTarget;
    