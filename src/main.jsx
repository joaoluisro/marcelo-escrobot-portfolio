import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './sections/Header.jsx'
import AboutMe from './sections/AboutMe.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <Header></Header>
  <AboutMe></AboutMe>
  <Projects></Projects>
  <Contact></Contact>
  </React.StrictMode>
)
