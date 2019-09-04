import React from 'react';



export default class app extends React.Component {

  componentDidMount(){
    alert("Hello ")
  }
  componentWillUnmount(){
    alert("Goodbye")
  }
  render(){
    return(<div></div>)
  }
}