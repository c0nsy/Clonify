import React from "react"
import Logo from "/CloneifyLogos/CloneifyLogo.png"
function Header(){
    return (
        <div>
            <div className="header">
                <img src={Logo} className="header--icon"/>
                <h1>Cloneify</h1>
            </div>
        </div>
    )
}

export default Header
