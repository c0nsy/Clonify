import React from "react"
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


function MainCard(props){

    const handleAdd = (id) => {
        console.log(id)
    }
    return(
        <div>
            <div className="mainCardObject">
                <div className="cardObj">
                    <img src={props.image} className ="mainCardImage"/>
                    <img src={props.playbutton} className="playbutton"/>
                    <img src={props.addbutton} onClick={() => handleAdd(props.id)} className="addbutton" />
                </div>
            </div>
        </div>
        
    )
}

export default MainCard