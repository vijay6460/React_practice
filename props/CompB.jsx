import React from "react";
class CompB extends React.Component{
render(){
    return(
        <div>
        <h4>This is for the CompB</h4>
        <h4>Welcome {this.props.Name}</h4>
        
        </div>
    )
}    
}
export default CompB