import React from 'react';
import MySquare from './MySquare';

function DraggableSquare(props){
    const { data } = props;
    const style = {
        flexGrow: 1,
        display: `flex`,

    }
    return (
        <div 
        style={style}
        draggable="true"
        onDragStart={(e) => {
            const messaggio = JSON.stringify(data);
            e.dataTransfer.setData('application/json', messaggio);
            console.log(
                'data being sent:', 
                messaggio);
        }}
        >
            <MySquare {...data}/>
        </div>
    );
}

export default DraggableSquare;
    