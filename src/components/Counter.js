
import React, { Component } from "react";
// i can say react.component
// todd likes this method
// component is the class we are inheritig
class Counter extends Component {

constructor(props) {
    super(props)
    this.state = {
        counter:0,
        
    }
}
componentDidMount(){
    document.title = `you clicked ${this.state.counter} times.`
}
componentDidUpdate (){
    document.title = `you clicked ${this.state.counter} times`
}
render() {  // every class component needs to have a render method
    //first thing we do is to desconstruct
  const {counter} = this.state
  const { name } = this.props
  return (
    <>
    <h1>You clicked the button {counter} times</h1>
    <button onClick = {()=> this.setState({counter: counter + 1})}>
        {showCount && <Counter name={'Matt'}/>}
       
        </button>
  </>
  )

}



}

export default Counter