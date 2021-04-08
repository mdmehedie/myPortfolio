import React from 'react'

function Product (props){
    const SPStyle = {
        border:"1px solid",
        padding:"10px",
        borderRadius:"5px",
        margin:"10px",
        textAlign:"center",
    }
    return(
        <div style={SPStyle}>
            <h4>{props.name}</h4>
            <h2>{props.price}</h2>
            <button  onClick={props.clickCount}>Add Cart</button>
        </div>
    );
}

export default Product