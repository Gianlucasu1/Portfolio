import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Header} from "../src/components/header/Header"
import {Home} from "../src/components/home/Home"
import {About} from "../src/components/about/About"
import {Skills} from "../src/components/skills/Skills"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <main className="main">
        <Home />
        <About />
        <Skills />
    </main>
    
  </React.StrictMode>
)
