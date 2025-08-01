import React from 'react'
import Navbar from './components/navbar'
import Home from './components/hero'
import About from './components/about'
import Projects from './components/project'
import Contact from './components/contact'
import { ToastContainer } from 'react-toastify'
import WhatsAppButton from './components/whatsappbutton'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <WhatsAppButton/>
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
