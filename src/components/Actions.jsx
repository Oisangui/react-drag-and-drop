import React from 'react';
import LoadButton from './LoadButton';
import SaveButton from './SaveButton';

function Actions(props) {
    const { actions } = props;
    const buttonStyle = {
        backgroundColor: `oldlace`,
        height: `3rem`,
        width: `8rem`,
        marginTop: `1rem`,
        color: `darkRed`,
        fontWeight: `bold`,
        textAlign: `center`,
        paddingBottom: 0,
        paddingTop: `1.5rem`
    }
    return (
        <div>
            <LoadButton actions={actions} style={buttonStyle}/>
            <SaveButton actions={actions} style={buttonStyle}/>
        </div>
    )
}

export default Actions;