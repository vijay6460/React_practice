import React from "react";
class CompA1 extends React.Component{
    render(){
        return(
            <div>
            <h4>This is for the components</h4>
            <h4>welcome {this.props.Age}</h4>            
            </div>
        )
    }
}
export default CompA1