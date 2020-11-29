import React from 'react';
import MySquare from './MySquare';

function DraggableSquare(props){
    const { data, inTarget } = props;
    const style = {
        flexGrow: 1,
        display: `flex`,

    }
    return (
        <div 
        style={style}
        draggable="true"
        onDragStart={(e) => {
            let messaggio;
            if (inTarget) {
                messaggio = JSON.stringify(data);
            } else {
                messaggio = JSON.stringify(data);
            }
            
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
    