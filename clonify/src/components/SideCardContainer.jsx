import React from "react";
import sidedata from "../sidedata"

function SideCard(){
    // const sideCards = SideData.map(card => {
        //   return(
        //     <SideCard 
        //       image={card.sideurl}
        //       key={card.id}
        //       title={card.sidetitle}
        //       playbutton={card.playbutton}
        //       addbutton={card.addbutton}
        //       playlistItem={playlistItem}
        //     />
        //   )
        // })
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

export default SideCardContainer
