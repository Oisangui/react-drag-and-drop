import React from 'react';
import LoadButton from './LoadButton';
import SaveButton from './SaveButton';

function Actions(props) {
    const { importer, exporter } = props;
    return (
        <div>
            <LoadButton importFunctionality={importer}/>
            <SaveButton exportFunctionality={exporter}/>
        </div>
    )
}

export default Actions;