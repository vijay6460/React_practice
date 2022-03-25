import React from "react";
import CompA1 from "./Practice/props/CompA1";
import CompB from "./Practice/props/CompB";
class App extends React.Component{
    render(){
        return(
            <div>
            <h4>Welcome to the world of React</h4>
            <CompB Name="vijay"/>
            <CompA1 Age="22"/>
            </div>
        )}
}
export default App