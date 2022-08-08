import React from "react"
// ASSETS IMPORTS
import LowFiSide from "../assets/lowfiSideCard.png"
import PodCastSide from "../assets/podcastSideCard.png"
import PunkSide from "../assets/punkSideCard.png"
import RadioLSSide from "../assets/radiolsSideCard.png"
import SpanishSide from "../assets/spanishSideCard.png"
import FreshFindsSide from "../assets/freshfindsSideCard.png"
import PlayButton from "../assets/playbutton.png"
import AddButton from "../assets/AddImage.png"

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

function SideCard(){
    return(
        <div>
            <div className="sideCardObjects">
                <ul>
                    <li>
                        <div className="sideCardObj">
                            <img src={LowFiSide} className="sideCardImage"/>
                            <img src={PlayButton} className="smallplaybutton"/>
                            <img src={AddButton} className="smalladdbutton"/>
                        </div>
                    </li>

                    <li>
                        <div className="sideCardObj">
                            <img src={PodCastSide} className="sideCardImage" />
                            <img src={PlayButton} className="smallplaybutton"/>
                            <img src={AddButton} className="smalladdbutton"/>
                        </div>
                    </li>

                    <li>
                        <div className="sideCardObj">
                            <img src={PunkSide} className="sideCardImage" />
                            <img src={PlayButton} className="smallplaybutton"/>
                            <img src={AddButton} className="smalladdbutton"/>
                        </div>
                    </li>

                    <li>
                        <div className="sideCardObj">
                            <img src={RadioLSSide} className="sideCardImage" />
                            <img src={PlayButton} className="smallplaybutton"/>
                            <img src={AddButton} className="smalladdbutton"/>
                        </div>
                    </li>

                    <li>
                        <div className="sideCardObj">
                            <img src={SpanishSide} className="sideCardImage" />
                            <img src={PlayButton} className="smallplaybutton"/>
                            <img src={AddButton} className="smalladdbutton"/>
                        </div>
                    </li>

                    <li>
                        <div className="sideCardObj">
                            <img src={FreshFindsSide} className="sideCardImage" />
                            <img src={PlayButton} className="smallplaybutton"/>
                            <img src={AddButton} className="smalladdbutton"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideCard
