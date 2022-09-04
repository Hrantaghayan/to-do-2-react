import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
class Todoup extends React.Component{
    constructor(...args){
        super(...args)
        this.state={
            inputvalue:'',
            todoitems:[
                {action:'Buy milk',done:false, id:Math.random()},
                {action:'Buy egg',done:false, id:Math.random()},
                {action:'Do my homeworks',done:false, id:Math.random()}
            ],
            filter:'all'
        }
    }
    onInputchange=(e)=>{
      this.setState({
        inputvalue:e.target.value
      })
    }
    Onadd=()=>{
      if(this.state.inputvalue===''){
        alert('you didnt write anything')
      }
      else{
        this.setState({
          todoitems:[
            ...this.state.todoitems,
          {action:this.state.inputvalue,done:false,id:Math.random()}
          ],
          inputvalue:'',
        })
      }
    }
    onDelete=(mustdeleted)=>{
      this.setState({
        todoitems:this.state.todoitems.filter((el)=>{
          if(el.id !== mustdeleted){
            return true
          }
          else{
            return false
          }
        })
      })
    }
    oncheckedchange=(id)=>{
     let newtodoitems = this.state.todoitems.map((el,ind,newtodoitems)=>{
      if(el.id===id){
      return{
        ...el,
        done:!el.done,
      }
      }
      else{
        return el
      }
     })
     this.setState({
      todoitems:newtodoitems
     })
    }
    onStatechange=(e)=>{
      debugger
     if(e.target.innerHTML === 'ALL'){
      this.setState({
       filter:'all'
      })
     }
     if(e.target.innerHTML === 'CHECKED'){
      this.setState({
       filter:'checked',
     })
    }
    if(e.target.innerHTML === 'UNCHECKED'){
     this.setState({
      filter:'unchecked'
     })
    }
    }
   render(){
   return(
    <div className="container">
    <Header
    change={this.onInputchange}
    value={this.state.inputvalue}
    onBtnclick={this.Onadd}
    />
    <Body
    ifChecked={this.oncheckedchange} 
    items={()=>{
      if(this.state.filter === 'all'){
        return this.state.todoitems
      }
      if(this.state.filter === 'checked'){
        return (this.state.todoitems.filter((el)=>{
           if(el.done===true){
            return true
           }
        })
        )
      }
      if(this.state.filter==='unchecked'){
        return (this.state.todoitems.filter((el)=>{
          if(el.done===false){
           return true
          }
       })
       )
      }
    }}
    deleted={this.onDelete}
    />
    <Footer
    changebody={this.onStatechange}
    />
    </div>
   )
 }
}
export default Todoup