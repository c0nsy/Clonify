import React, {useState} from 'react'
import Data from "../data"
import MainCard from './MainCard'

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

    return(
        <div>
            <div className="mainCardObject">
                {mainCards}
            </div>
            
        </div>
        
    )
}
export default MainCardContainer