import React from 'react';

function MySquare(props){
    const { label, color } = props;
    const style = {
        backgroundColor: color,
        flexGrow: 1,
        display: `flex`,
        fontSize: `2rem`
    }
    const parStyle = {
        margin: 0,
        padding:0,
        textAlign:`center`,
        flexGrow:1,
        paddingTop:`1rem`
    }
    return (
        <div 
        className="my-square"
        style={style}
        >
            <p style={parStyle}>{label}</p>
        </div>
    );
}

export default MySquare;
    