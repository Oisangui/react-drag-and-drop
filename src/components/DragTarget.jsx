import React, {useState, useEffect} from 'react';
import SquareContainer from './SquareContainer';

function DragTarget(props){
    const { hSquares, vSquares, onOverlap, actions } = props;
    const [ data, setData ] = useState({});
    const style = {
        display: `grid`,
        gridTemplateColumns: `repeat(${hSquares}, 5rem)`,
        gridTemplateRows: `repeat(${vSquares}, 5rem)`,
        gap: `0px`,
    }
    const loadSquares = function(){
        console.log(`what`)
        console.log(data)
        const newSquares = [];
        for (let j=0;j<vSquares;j++){
            for (let i=0;i<hSquares;i++){
                let key = `${i},${j}`
                let datum = data[key];
                if (datum){
                    console.log(`pushing it`)
                    newSquares.push(
                        <SquareContainer i={i} j={j} key={key} data={Object.assign({inTarget:true, pos:key}, datum)} color={datum.color}/>
                    );
                    continue;
                }
                newSquares.push(
                    <SquareContainer i={i} j={j} key={key} data={null}/>
                )
            }
        }
        console.log(newSquares)
        return newSquares;
    }
    actions.exportFunctionality = function(){
        return JSON.stringify(data);
    }
    actions.importFunctionality = function(data){
        console.log(`receiving data`, data)
        setData(data);
    }
    const handleDrop = function(e){
        e.preventDefault();
        //e.currentTarget.style.fontSize='30px';
        const droppedData = e.data;
        const key = e.position;
        const current = e.current;
        console.log('CURRENT')
        console.log(current);
        const pos = key.split(',');
        let newData = Object.assign({}, data);
        if ((onOverlap === 'replace') || (!current)) {
            console.log(`REPLACING`)
            console.log(data)
            newData = Object.assign({}, data);
            newData[key] = Object.assign({}, droppedData);
            Object.assign(newData[key], {inTarget:true, pos:key});
        } else if (onOverlap === 'move'){
            const i = parseInt(pos[0]);
            const j = parseInt(pos[1]);
            const makeKey = (i, j)=>`${i},${j}`;
            const up = makeKey(i, j-1);
            const down = makeKey(i, j+1);
            const left = makeKey(i - 1, j-1);
            const right = makeKey(i + 1, j);
            const d1 = makeKey(i + 1, j+1);
            const d2 = makeKey(i + 1, j-1);
            const d3 = makeKey(i - 1, j+1);
            const d4 = makeKey(i - 1, j-1);
            const options = [up, down, left, right, d1, d2, d3, d4];
            let didAdd = false;
            options.forEach((newKey)=>{
                if (didAdd){
                    return;
                }
                const I = parseInt(newKey.split(',')[0]);
                const J = parseInt(newKey.split(',')[1]);
                if (I >= hSquares) {
                    return;
                }
                if (I < 0) {
                    return;
                }
                if (J >= vSquares) {
                    return;
                }
                if (J < 0) {
                    return;
                }
                if (data[newKey]){
                    return;
                }
                didAdd = true;
                console.log(`data is changing`)
                console.log(i, j)
                console.log(I, J)
                console.log(newKey)
                console.log(data)
                newData = Object.assign({}, data);
                const anterior = data[key];
                newData[key] = Object.assign({}, droppedData);
                newData[newKey] = Object.assign({}, anterior);
                Object.assign(newData[key], {inTarget:true, pos:key});
                Object.assign(newData[newKey], {inTarget:true, pos:newKey});
                return;
            });
        }
        if (droppedData.inTarget) {
            delete newData[droppedData.pos];
        }
        setData(newData);
        e.stopPropagation();
    }
    return (
        <div className="drag-target" style={style} onDrop={handleDrop}>
            {loadSquares()}
        </div>
    );
}

export default DragTarget;
    