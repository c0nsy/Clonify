import React from "react"
function Header(props){
    return (
        <div>
            <div className="header">
                <img src={props.logo} className="header--icon"/>
                <h1>{props.title}</h1>
            </div>
            
        </div>
        
    )
}

export default Header
