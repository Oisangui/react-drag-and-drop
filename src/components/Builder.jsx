import React from 'react';
import DragSourceCont from './DragSourceCont';
import DragTargetCont from './DragTargetCont';
import Actions from './Actions';

function Builder(props) {
    const { title, possibleSquaresData, targetGridData } = props;
    const style = {
        display: `flex`, 
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        backgroundColor: `darkred`,
        color: `ghostwhite`,
    }
    const actions = {
        exportFunctionality: function(){console.log(`this is wrong`)},
        importFunctionality: function(){console.log(`this is wrong`)}
    }
    return (
        <div
        style={style}
        >
            <h3>{title}</h3>
            <DragSourceCont data={possibleSquaresData}/>
            <DragTargetCont data={targetGridData} actions={actions}/>
            <Actions actions={actions}/>
        </div>
    );
}

export default Builder;