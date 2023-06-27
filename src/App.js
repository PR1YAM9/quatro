import React from 'react'
import './App.css'
import Hero from './components/Hero'
import MeetTheTeam from './components/MeetTheTeam'
import RecentWork from './components/RecentWork'
import ReadyTo from './components/ReadyTo'
import FAQ from './components/FAQ/FAQ'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <MeetTheTeam/>
      <RecentWork/>
      <ReadyTo/>
      <ContactForm/>
      <FAQ/>
    </>
  )
}

export default App