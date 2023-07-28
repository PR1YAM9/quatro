import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import MeetTheTeam from './components/MeetTheTeam';
import RecentWork from './components/RecentWork';
import ReadyTo from './components/ReadyTo';
import FAQ from './components/FAQ/FAQ';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Services from './components/Services';
import { Ripples } from '@uiball/loaders';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ backgroundColor: '#1B1B1B', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
        <Ripples 
          size={130}
          speed={2} 
          color="#2CB67D" 
        />
      </div>
    );
  }
  return (
    <div className='App' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar/>
      <Hero/>
      <MeetTheTeam/>
      <Services/>
      <RecentWork/>
      <ReadyTo/>
      <ContactForm/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;


//  import React, { useState, useEffect } from 'react';
//  import './App.css';
//  import Hero from './components/Hero';
//  import MeetTheTeam from './components/MeetTheTeam';
//  import RecentWork from './components/RecentWork';
//  import ReadyTo from './components/ReadyTo';
//  import FAQ from './components/FAQ/FAQ';
//  import Navbar from './components/Navbar';
//  import ContactForm from './components/ContactForm';
//  import Footer from './components/Footer';
//  import Services from './components/Services';
//  import { Ripples } from '@uiball/loaders';

// const App = () => {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!localStorage.getItem('loaded')) {
//       setLoading(true);
//       const timer = setTimeout(() => {
//         setLoading(false);
        
//         localStorage.setItem('loaded', 'true');
//       }, 5000);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   if (loading) {
//     return (
//       <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
//         <Ripples 
//        size={130}
//        speed={2} 
//        color="#2CB67D" 
//        />
//       </div>
//     );
//   }

//   return (
    
//      <div className='App' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
//        <Navbar/>
//        <Hero/>
//        <MeetTheTeam/>
//        <Services/>
//        <RecentWork/>
//        <ReadyTo/>
//        <ContactForm/>
//        <FAQ/>
//        <Footer/>
//      </div>
//   )
// }

// export default App;

