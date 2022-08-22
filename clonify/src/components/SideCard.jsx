import React from "react"

/* 
    TO DO
    -on click functionality for add button
    -adds title of genre to under nav bar
        -refract code below
            -JSON file called data that has title, genre, and image src
    -add functionality to play button
        -click once play the song
        -click again to pause

*/

function SideCard(props){
    
    return(
        <div className="sideCardObjects">
            <ul>
                <li>
                    <div className="sideCardObj">
                        <img src={props.image} className="sideCardImage"/>
                        <img src={props.playbutton} className="smallplaybutton"/>
                        <img src={props.addbutton} className="smalladdbutton"/>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SideCard
