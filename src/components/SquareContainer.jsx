import React, {useEffect, useState} from 'react';
import DraggableSquare from './DraggableSquare';

function SquareContainer(props){
    const { i, j, setData, data} = props;
    const [ square, setSquare ] = useState({square:null, data:null});
    const style = {
        display: `flex`,
        backgroundColor: `oldlace`,
        margin:0,
    }
    
    const handleDrop = function(e){
        e.preventDefault();
        //e.currentTarget.style.fontSize='30px';
        const droppedData = JSON.parse(e.dataTransfer.getData('application/json'));
        setSquare({
            square : <DraggableSquare data={droppedData}/>,
            data: droppedData,
        }
        );
        setData(data=>{
            let d = Object.assign({}, data[`${i},${j}`]);
            Object.keys(droppedData).forEach((key)=>{
                d[key] = droppedData[key];
            });
            data[`${i},${j}`] = d;
            return data;
        })
        e.position = `${i},${j}`;
        e.square = square;
    }
    useEffect(()=>{if (!data){setSquare({square:null, data:null});return;} setSquare({
        square : <DraggableSquare data={data}/>,
        data: data,
    })}, [data]);
    /* if (data) {
        setSquare({
            square : <DraggableSquare data={data}/>,
            data: data,
        }
        );
    } */
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
            {square.square}
        </div>
    );
}

export default SquareContainer;