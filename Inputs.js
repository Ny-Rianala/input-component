import React from "react";


function Inputs(props) {
    console.log(props);
    return (
        <div>
             <input 
                className= 
                    {`
                    ${props.input ? props.input : ""}
                    ${props.disabled ? props.disabled : ""}
                    ${props.smSize ? props.smSize : ""}  
                    ${props.mdSize ? props.mdSize : ""}
                    ${props.fullWidth ? props.fullWidth : ""}   
                    `}  
             />
                {props.children}
        </div>        
    );
}


export default Inputs;

/*function Components(props) {
    console.log(props);
    const input = props.input || props.children;
	let classes = props.className ? `${props.className}` : "";
	if (props.firstname) {
		classes = `${classes} firstname`;
	}
	if (props.lastname) {
		classes = `${classes} ${props.lastname}`;
	}
	if (props.icon) {
		classes = `${classes} ${props.icon}`;
	}
	return (
        <div><i className="fa fa-search"></i></div>
	);
}*/

