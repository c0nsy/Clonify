import React from "react"
import Data from "../data"

function MainCardContainer(){
    const mainCards = Data.map(card => {
        return(
          <MainCard 
              key={card.id}
              id={card.id}
              image={card.url}
              title={card.title}
              playbutton={card.playbutton}
              addbutton={card.addbutton}
          />
        )
      })
    const handleAdd = (title) => {
        setPlaylistItem(title);
    }
    return(
        <div>
            {/* {mainCards} */}
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
export default MainCardContainer