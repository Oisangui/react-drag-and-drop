import React from 'react';
import DraggableSquare from './DraggableSquare';

function DragSource(props){
    const { data } = props;
    const style = {
        display: `flex`,
        flexFlow: `row wrap`,
        height: `5rem`,
        width: `${data.numberOfSquares * 5}rem`
    }
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
        return squares;
    }
    console.log('rendering source')
    return (
        <div 
        className="drag-source"
        style={style}
        >
            {loadSquares()}
        </div>
    );
}

export default DragSource;
    