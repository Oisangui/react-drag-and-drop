import React from 'react';
import DragSourceCont from './DragSourceCont';
import DragTargetCont from './DragTargetCont';
import Actions from './Actions';

function Builder(props) {
    const { title, possibleSquaresData, targetGridData } = props;
    const exportFunctionality = function(){

    }
    const importFunctionality = function(data){

    }
    return (
        <div>
            <h3>{title}</h3>
            <DragSourceCont data={possibleSquaresData}/>
            <DragTargetCont data={targetGridData}/>
            <Actions importer={importFunctionality} exporter={exportFunctionality}/>
        </div>
    );
}

export default Builder;