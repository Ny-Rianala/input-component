import React from "react"
import "./index.css";
import "./Inputs.js";
import Inputs from "./Inputs.js";

class App extends React.Component {
    render() {
        return (
            <main>
                <h1>Input Component</h1>
                <form>
                    {`<input />`}   
                    <br />
                    <Inputs
                       label="Label"
                       input="firstName"
                       type="text" 
                       placeholder="Enter First Name"
                       />
                    <br />
                    {`<Input error />`}
                    <Inputs 
                       input="lastName"
                       type="text"
                       placeholder="Last Name"
                       required 
                       />
                    <br />
                    {`<disable />`}
                    <Inputs 
                        disabled="Disabled"
                        type="text" 
                        placeholder="Disable" 
                        />
                    <br />
                    {`<Input helperText=”Some interesting text” />`}
                    <Inputs 
                       input="helperText"
                       type="text" 
                       name="firstName"
                       placeholder="Placeholder" 
                       />
                    <br />
                    {`<Input startIcon />`}
                    <Inputs 
                      type="text" 
                      input="startIcon"
                      placeholder="Placeholder"
                       />
                    <br />
                    {`<Input endIcon />`}
                    <Inputs 
                      type="text" 
                      input="endIcon" 
                      placeholder="Placeholder"
                    />
                    <br />
                    {`<Input value="text" />`}
                    <Inputs 
                      type="text"
                      input="text" 
                      placeholder="Text"
                    />
                    <br />
                    <div>
                        {`<Input size="sm" />`}
                        <Inputs
                            smSize="sm" 
                            type="text"  
                            placeholder="Placeholder"
                        />
                        <br />
                        {`<Input size="md" />`}
                        <Inputs 
                            mdSize= "md" 
                            type="text"  
                            placeholder="Placeholder"
                        />
                        <br />
                    </div>
                    {`<Input fullWidth />`}
                    <Inputs 
                        fullWidth= "fullSize" 
                    />
                    <br />
                </form>
            </main>
        )
    }
}


export default App;