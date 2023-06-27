import React from 'react'
import './App.css'
import MeetTheTeam from './components/MeetTheTeam'
import RecentWork from './components/RecentWork'
import ReadyTo from './components/ReadyTo'
import FAQ from './components/FAQ/FAQ'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar/>
      <MeetTheTeam/>
      <RecentWork/>
      <ReadyTo/>
      <ContactForm/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App