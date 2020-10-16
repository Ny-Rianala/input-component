import React from "react";
import Phone from "./images/phone.svg"
import Lock from "./images/lock.svg"

function Inputs(props) {
    console.log(props);
    console.log(Phone);
    console.log(Lock);
    return (
        <div className="container">
            {props.startIcon ?
             <img className="startIconImage" src={ Phone } /> 
             : props.endIcon ?
             <img className="endIconImage" src={ Lock }/> 
             :"" } 
            {props.Error ? <label className="err">Label</label> : ""}
            <input 
                className= 
                    {`
                    ${props.input ? props.input : ""}
                    ${props.Error ? props.Error : ""}
                    ${props.startIcon ? props.startIcon : ""}
                    ${props.disabled ? props.disabled : ""}
                    ${props.smSize ? props.smSize : ""}  
                    ${props.mdSize ? props.mdSize : ""}
                    ${props.fullWidth ? props.fullWidth : ""}
                    ${props.text ? props.text : ""} 
                    `} 
                    placeholder="Placeholder" 
             />
                {props.children}
        </div>        
    );
}


export default Inputs;

