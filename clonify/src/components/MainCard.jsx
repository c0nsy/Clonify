import React from "react"
import HipHopCard from "../assets/hiphopMainCard.png"
import HouseCard from "../assets/houseMainCard.png"
import PopCard from "../assets/popMainCard.png"
import PlayButton from "../assets/playbutton.png"
import AddButton from "../assets/AddImage.png"

/* 
    TO DO
    -create data json
        -contains maincard and sidecard objects
        -!figure out how to display main cards with only 3 at a time with side scrolling functionality!
    -on click functionality for add button
    -adds title of genre to under nav bar
        -refract code below
            -JSON file called data that has title, genre, and image src
    -add functionality to play button
        -click once play the song
        -click again to pause
    -browse all button
        -using react route to another page
        -mega json data
        -add cards get deployed

*/


function MainCard(){
    return(
        <div>
            <div className="mainCardObject">
                <ul>
                    <li>
                        <div className="cardObj">
                            <img src={HipHopCard} className ="mainCardImage" />
                            <img src={PlayButton} className="playbutton"/>
                            <img src={AddButton} className="addbutton"/>
                        </div>
                        
                    </li>

                    <li>
                        <div className="cardObj">
                            <img src={HouseCard} className = "mainCardImage" />
                            <img src={PlayButton} className="playbutton"/>
                            <img src={AddButton} className="addbutton"/>
                        </div>
                        
                    </li>

                    <li>
                        <div className="cardObj">
                            <img src={PopCard} className = "mainCardImage"/>
                            <img src={PlayButton} className="playbutton"/>
                            <img src={AddButton} className="addbutton"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainCard