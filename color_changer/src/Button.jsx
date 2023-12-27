import React from "react";


function My_button({col}){

    function change_color(col){
      document.querySelector('#root').style.backgroundColor = col;
    }
  
    return (
        <div >
            <button onClick={()=>change_color(col)} style={{backgroundColor : col}}>{col}</button>
        </div>
    )
  }

export default My_button
