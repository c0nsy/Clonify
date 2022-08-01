import React from "react"
import { CloneifyLogo } from '../assets/CloneifyLogo.png'
function Header(){
    return (
        <div className="header">
            <img src={CloneifyLogo} />
            <h1>Cloneify</h1>
        </div>
    )
}

export default Header
