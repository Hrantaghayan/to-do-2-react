import React from "react";
class Body extends React.Component{
    render(){
        let arr = this.props.items()
        let newarr = arr.map((el)=>{
          return(
            <div className="for-items"key={el.id} id={el.id}>
            <input type='checkbox'
            onChange={()=>{
                this.props.ifChecked(el.id)
            }}
            checked={el.done}
            />
            {el.action}
            <button className="delete" onClick={()=>{
                this.props.deleted(el.id)
            }}>X</button>
         </div>
          )
        })
        return(
        newarr
        )
    }
}
export default Body