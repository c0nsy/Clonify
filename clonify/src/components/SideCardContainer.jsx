import React, {useState} from 'react'
import Data from "../sidedata"
import SideCard from "./SideCard"

function SideCardContainer(){
    const sideCards = Data.map(card => {
          return(
            <SideCard 
              image={card.sideurl}
              key={card.id}
              title={card.sidetitle}
              playbutton={card.playbutton}
              addbutton={card.addbutton}
            />
          )
        })
    return(
        <div className="sideCardObjects">
            {sideCards}
        </div>
    )
}

export default SideCardContainer
{/* <ul>
    <li>
        <div className="sideCardObj">
            <img src={props.image} className="sideCardImage"/>
            <img src={props.playbutton} className="smallplaybutton"/>
            <img src={props.addbutton} className="smalladdbutton"/>
        </div>
    </li>
</ul> */}