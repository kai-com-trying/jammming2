import React from 'react'

const Title = () => {

    const titleStyle = {
        backgroundColor: "#1A1A1D",
        margin: 0,
        padding: 0,
        width: "100%",  /* 100% of the viewport width */
        height: "100px", /* Adjust height as needed */
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={titleStyle}>
            <h1 style={{margin: 0}}>Ja<span style={{color: "#A64D79"}}>mmm</span>ing!</h1>
        </div>
    )
}

export default Title
