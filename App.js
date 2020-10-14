import React from "react"
import Components from "./Components";
import "./index.css";

class App extends React.Component {
    render() {
        return (
            <main>
                <h1>Input Component</h1>
                <form>
                    {`<input />`}
                    <br />
                    <label>Label</label>
                    <input
                        className="firstname"
                        label="Username"
                        type="text"
                        placeholder="Enter First Name"
                    />
                    <br />
                    {`<Input error />`}
                    <input
                        className="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                    />
                    <br />
                    {`<disable />`}
                    <input
                        className="Disable"
                        type="text"
                        placeholder="Disable"
                    />
                    <br />
                    {`<Input helperText=”Some interesting text” />`}
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Placeholder"
                    />
                    <br />
                    {`<Input startIcon />`}
                    <input
                        type="text"
                        icon="iconStart"
                        className="fa fa-phone fa-lg fa-fw"
                        placeholder="Placeholder"
                    />
                    <br />
                    {`<Input endIcon />`}
                    <input
                        type="text"
                        icon="endIcon"
                        placeholder="Placeholder"
                    />
                    <br />
                </form>
            </main>
        )
    }
}


export default App;