import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import MainCard from './components/MainCard'
import SideCard from './components/SideCard'

function App() {

  return (
    <div className="App">
      <div className="everything">
        <Navbar />
        <Header />
        <CardContainer />
        <div className="maincards">
          <MainCard />
        </div>
        <div className="sidecards">
          <SideCard />
        </div>
      </div>
    </div>
  )
}

export default App
