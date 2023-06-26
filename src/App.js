import React from 'react'
import './App.css'
import MeetTheTeam from './components/MeetTheTeam'
import RecentWork from './components/RecentWork'
import ReadyTo from './components/ReadyTo'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
      <Navbar/>
      <MeetTheTeam/>
      <RecentWork/>
      <ReadyTo/>
    </>
  )
}

export default App