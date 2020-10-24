import React from 'react';


const textBox = (props) => {
    
 
    return (
        <div className="input-box">
            <label>{props.boxName}</label>
            <input type='text'/>
        </div>
    )
}
export default textBox;
