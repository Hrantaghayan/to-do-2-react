import React from "react";
function Footer (props){
    return (
        <div className="end">
            <button className="btn"
             onClick={(e)=>{
                debugger
                props.changebody(e)
            }}>ALL</button>
            <button className="btn"
              onClick={(e)=>{
                debugger
                props.changebody(e)
            }}
            >CHECKED</button>
            <button className="btn"
              onClick={(e)=>{
                debugger
                props.changebody(e)
            }}>UNCHECKED</button>
        </div>
    )
}
export default Footer