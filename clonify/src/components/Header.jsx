import React from "react"
import CloneifyIcon from "../assets/CloneifyLogo.png"
function Header(){
    return (
        <div className="header">
            <img src={CloneifyIcon} className="header--icon"/>
            <h1>Cloneify</h1>
        </div>
    )
}

export default Header
