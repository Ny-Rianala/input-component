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
                        placeholder="First Name"
                    />
                    <br />
                    {`Label`}
                    <input
                        type="text"
                        name="startIcon"
                        placeholder="First Name"
                    />
                    <br />
                    {`Label`}
                    <input
                        type="text"
                        name="endIcon"
                        placeholder="First Name"
                    />
                    <br />
                </form>
            </main>
        )
    }
}


export default App;