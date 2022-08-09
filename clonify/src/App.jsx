import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
// import SideCard from './components/SideCard'
import Data from "./data"
import MainCard from './components/MainCard'
function App() {
  const navbarIcons = Data.map(icon =>{
    return(
      <Navbar 
        key={icon.id}
        icon={icon.iconUrl}
        title={icon.iconTitle}
      />
    )
  })
  const mainCards = Data.map(card => {
    return(
      <MainCard 
          image={card.url}
          key={card.id}
          title={card.title}
          playbutton={card.playbutton}
          addbutton={card.addbutton}
      />
    )
  })
  const cloneify = Data.map(logo =>{
    return(
      <Header 
        key={logo.id}
        logo={logo.logoUrl}
        title={logo.logoTitle}
      />
    )
  })
  

  return (
    <div className="App">
      {navbarIcons}
      {cloneify}
      
      <CardContainer />
      <div className="maincards">
          {mainCards}
      </div>
    </div>
  )
}

export default App
/* <div className="everything">
        <Navbar />
        <Header />
        <CardContainer />
        <div className="maincards">
          {mainCards}
        </div>
        <div className="sidecards">
          <SideCard />
        </div>
      </div> */