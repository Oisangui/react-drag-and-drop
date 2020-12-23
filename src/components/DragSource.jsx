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
    return (
        <div 
        className="drag-source"
        style={style}
        >
            {data.data.map((d, i) => (
                    <DraggableSquare data={d} key={i}/>
            ))}
        </div>
    );
}

export default DragSource;
    