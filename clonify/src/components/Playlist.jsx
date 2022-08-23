import React from "react"

function Playlist(props){
    return(
        <div className="playlistContainer">
            <ul>
                <li>{props.playlistItem}</li>
            </ul>
        </div>
    )   
}
export default Playlist