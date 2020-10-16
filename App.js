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
                        input="firstName"
                       />
                    <br />
                    {`<Input error />`}
                    <Inputs 
                       Error="error" 
                       />
                    <br />
                    {`<disable />`}
                    <Inputs 
                        disabled="Disabled" 
                        />
                    <br />
                    {`<Input helperText=”Some interesting text” />`}
                    <Inputs 
                       input="helperText" 
                       />
                    <br />
                    {`<Input startIcon />`}
                    <Inputs 
                      startIcon="phone" 
                      input="startIcon"
                       />
                    <br />
                    {`<Input endIcon />`}
                    <Inputs 
                      endIcon="lock"
                      input="endIcon" 
                    />
                    <br />
                    {`<Input value="text" />`}
                    <Inputs 
                      text="Text" 
                    />
                    <br />
                    <div>
                        {`<Input size="sm" />`}
                        <Inputs
                            smSize="sm" 
                        />
                        <br />
                        {`<Input size="md" />`}
                        <Inputs 
                            mdSize= "md" 
                        />
                    <br />
                    </div>
                    {`<Input fullWidth />`}
                    <Inputs 
                        fullWidth= "fullSize" 
                    />
                </form>
            </main>
        )
    }
}


export default App;