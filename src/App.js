
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state={
    first:"0",
    second:"0",
    third:"0",
    forth:"0",
    fifth:"0"
  }

  handleFirst = ()=>{
    console.log("abc")
    if(this.state.first=="0"){
    this.setState({
      first:1
    })
  }else{
    this.setState({
      first:"0"
    })
    }
  }
  handleSecond = ()=>{
    console.log("2")
    if(this.state.second=="0"){
    this.setState({
      second:1
    })
  }else{
    this.setState({
      second:0
    })
    }
  }
  handleThird = ()=>{
    if(this.state.third=="0"){
    this.setState({
      third:1
    })
  }else{
    this.setState({
      third:"0"
    })
    }
  }
  handleForth = ()=>{
    if(this.state.forth=="0"){
    this.setState({
      forth:1
      
    })
  }else{
    this.setState({
      forth:"0"
    })
    }
  }
  handleFifth = ()=>{
    if(this.state.fifth=="0" && this.state.first==0){
    this.setState({
      first:1,
      second:1,
      third:1,
      forth:1,
    })
  }else{
    this.setState({
      first:0,
      second:0,
      third:0,
      forth:0,
      
    })
    }
  }
  render() {
    const style1 = {
      "zIndex":`${this.state.first}`
     
    }
    const style2 = {
      "zIndex":`${this.state.second}`
    }
    const style3 = {
      "zIndex":`${this.state.third}`
    }
    const style4 = {
      "zIndex":`${this.state.forth}`
    }
    const style5 = {
      "zIndex":`${this.state.fifth}`
    }
    return (
      <div className="App">
        <div className="card">
          <div style={style1} onClick={()=>this.handleFirst()} className="first "></div>
          <div style={style2} onClick={()=>this.handleSecond()} className="second "></div>
          <div style={style3} onClick={()=>this.handleThird()} className="third"></div>
          <div style={style4} onClick={()=>this.handleForth()} className="forth"></div>
          <div style={style5} onClick={()=>this.handleFifth()} className="fifth"></div>
        </div>
      </div>
    )
  }
}

