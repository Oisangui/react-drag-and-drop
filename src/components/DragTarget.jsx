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
    return (
        <div className="drag-target" style={style}>
            {squares}
        </div>
    );
}

export default DragTarget;
    