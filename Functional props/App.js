import CompA from "./Practice/Functional props/CompA"
import CompB from "./Practice/Functional props/CompB"
const App=()=>{
    return(
        <div>
        <h4>This is for the functional components</h4>
        <CompA Name="vijay"/>
        <CompB Age="22"/>
        </div>
    )
}
export default App