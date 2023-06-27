import React from 'react'
import './App.css'
import MeetTheTeam from './components/MeetTheTeam'
import RecentWork from './components/RecentWork'
import ReadyTo from './components/ReadyTo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <MeetTheTeam/>
      <RecentWork/>
      <ReadyTo/>
    </>
  )
}

export default App