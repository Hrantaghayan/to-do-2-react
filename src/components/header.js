import React from "react";

class Header extends React.Component{
    render(){
        return(
        <>
            <h3>To Do List</h3>
            <div className="for-typing">
            <input
            placeholder="Enter a task"
               onChange={this.props.change}
               className='inp'
               value={this.props.value}
               onKeyDown={(e)=>{
                if(e.code==='Enter'){
                    this.props.onBtnclick()
                }
            }}
            />
            <button className="submit"
            onClick={this.props.onBtnclick}>ADD</button>
            </div>
        </>
        )
    }
}
export default Header