import React from 'react';

function SaveButton(props){
    const { actions, style } = props;
    const handleClick = function(){
        const data = actions.exportFunctionality();
        const dataStr = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        const dlAnchorElem = document.createElement('a');
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "layout.json");
        dlAnchorElem.click();
    }
    return (
        <div style={style}
        onClick={handleClick}
        >
            Export JSON
        </div>
    );
}

export default SaveButton;
    