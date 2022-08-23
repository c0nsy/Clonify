import React, {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import MainCardContainer from './components/MainCardContainer'
import SideCardContainer from './components/SideCardContainer'
import Playlist from './components/Playlist'



// make state in parent component (app.jsx)
// pass value into sibling a
// pass setValue into sibling b


function App() {
  //playlist state
  const [playlistItem, setPlaylistItem] = useState([])

 
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CardContainer />
      <MainCardContainer playlistState={setPlaylistItem} />
      {/* <SideCardContainer playlistState={setPlaylistItem} /> */}
      <Playlist playlistItem={playlistItem} />

    </div>
  )
}

export default App

 // const mainCards = Data.map(card => {
  //   return(
  //     <MainCard 
  //         key={card.id}
  //         id={card.id}
  //         image={card.url}
  //         title={card.title}
  //         playbutton={card.playbutton}
  //         addbutton={card.addbutton}
  //         //playlistState={setPlaylistItem}
  //     />
  //   )
  // })
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
         {/* <Playlist /> */}
      {/* <Navbar />
      <Header />
      <Playlist />
      <CardContainer />
      <div className="maincards">
          {mainCards}
      </div> 
      <div className="sidecards">
        {sideCards}
      </div> */}