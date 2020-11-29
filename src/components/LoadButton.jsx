import React from 'react';

function LoadButton(props){
    const { actions, style } = props;
    const inputStyle = {
        display: `none`,
        width: style.width,
        height: style.height,
    }
    const handleChange = function(e){
        //console.log(e.target.files[0].text());
        e.target.files[0].text().then(r => {
            console.log(
                JSON.parse(decodeURIComponent(r))
            )
        const data = JSON.parse(decodeURIComponent(r));
        actions.importFunctionality(JSON.parse(data));
        })
        
        
    }
    return (
        <div style={style}
        >
            <label htmlFor="file-upload"> Import JSON</label>
            <input id="file-upload" type="file" name="file" onChange={handleChange} style={inputStyle}/>
        </div>
    );
}

export default LoadButton;
    