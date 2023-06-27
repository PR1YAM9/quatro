import React from 'react'
import './App.css'
import MeetTheTeam from './components/MeetTheTeam'
import RecentWork from './components/RecentWork'
import ReadyTo from './components/ReadyTo'
import FAQ from './components/FAQ/FAQ'


const App = () => {
  return (
    <>
      <MeetTheTeam/>
      <RecentWork/>
      <ReadyTo/>
      <FAQ/>
    </>
  )
}

export default App