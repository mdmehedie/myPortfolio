import React from 'react'


function Book (props){
    const boxStyle={
        padding:"10px",
        border:"1px solid",
        width:"300px",
        margin:"20px",
        borderRadius:"10px",
    }
    return(
        <div style={boxStyle}>
            <input
          type="text"
          onChange={props.inputChange}
          value={props.title}
        />
            <h3 onClick={props.change}>Title: {props.title}</h3>
            <p>Writer: {props.writer}</p>
        </div>
    )
}

export default Book