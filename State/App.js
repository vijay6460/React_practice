import React from "react";
import CompA from "./Practice/State/CompA";
import CompB from "./Practice/State/CompB";
class App extends React.Component{
    state={Name:'vijay'}
    render(){
return(
    <div>
    <center>
    <h3>This is for the App</h3>
    <h3>Welcome {this.state.Name}</h3>
    <CompA/>
    <CompB/>
    </center>
    </div>
)   
    }
}
export  default App