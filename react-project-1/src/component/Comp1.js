import React from "react";

const Todolist =({list,deleteHandler}) =>{
    return(
        <div>
           {
            list.map((eachlist,index) =>{
                return <div  className="name"key={index}>
                    <h4 className="headinglist">{eachlist} &nbsp;<button onClick={()=>deleteHandler(index)}>Delete</button></h4>
                </div>

            })
           } 
        </div>
    )
}

export default Todolist;