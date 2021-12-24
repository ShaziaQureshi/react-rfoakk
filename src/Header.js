import React from "react";
import ReactDOM from "react-dom"

function Header(){
  return(
    <header>
      <div className="heading">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="react-logo"/>
      <p id="head"><b>ReactFacts</b></p>
      </div>
      <div>
      <p id="projectName">React Course Project-1</p>
      </div>
    </header>
  )
}
export default Header