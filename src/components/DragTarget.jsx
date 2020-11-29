import React, {useState, useEffect} from 'react';
import SquareContainer from './SquareContainer';

function DragTarget(props){
    const { hSquares, vSquares, onOverlap, actions } = props;
    const [ squares, setSquares ] = useState([]);
    const [ data, setData ] = useState({});
    const style = {
        display: `grid`,
        gridTemplateColumns: `repeat(${hSquares}, 5rem)`,
        gridTemplateRows: `repeat(${vSquares}, 5rem)`,
        gap: `0px`,
    }
    const loadSquares = function(){
        const newSquares = [];
        for (let i=0;i<hSquares;i++){
            for (let j=0;j<vSquares;j++){
                newSquares.push(
                    <SquareContainer i={i} j={j} key={`${i},${j}`} setData={setData}/>
                )
                //newData[`${i},${j}`] = {};
            }
        }
        setSquares(newSquares);
    }
    useEffect(loadSquares, []);
    actions.exportFunctionality = function(){
        return JSON.stringify(data);
    }
    actions.importFunctionality = function(data){
        console.log(`receiving data`, data)
        const newSquares = [];
        const keys = Object.keys(data);
        for (let i=0;i<hSquares;i++){
            for (let j=0;j<vSquares;j++){
                let key = `${i},${j}`
                let datum = data[key];
                if (datum){
                    newSquares.push(
                        <SquareContainer i={i} j={j} key={key} setData={setData} data={datum}/>
                    );
                    continue;
                }
                newSquares.push(
                    <SquareContainer i={i} j={j} key={key} setData={setData}/>
                );
            }
        }
        setData({});
        setData(data);
        setSquares([]);
        setSquares(newSquares);
    }
    const handleDrop = function(e){
        e.preventDefault();
        //e.currentTarget.style.fontSize='30px';
        const droppedData = JSON.parse(e.dataTransfer.getData('application/json'));
        if (onOverlap === 'replace') {
            return;
        }

        //supposing onOverlap === 'move'
/*         setSquare({
            square : <DraggableSquare data={droppedData}/>,
            data: droppedData,
        }
        ); */
/*         setData(data=>{
            let d = Object.assign({}, data[`${i},${j}`]);
            Object.keys(droppedData).forEach((key)=>{
                d[key] = droppedData[key];
            });
            data[`${i},${j}`] = d;
            return data;
        }) */
        console.log(e.position);
        console.log(e.square);
        e.stopPropagation();
    }
    return (
        <div className="drag-target" style={style} onDrop={handleDrop}>
            {squares}
        </div>
    );
}

export default DragTarget;
    