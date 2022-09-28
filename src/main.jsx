import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Header} from "../src/components/header/Header"
import {Home} from "../src/components/home/Home"
import {About} from "../src/components/about/About"
import {Skills} from "../src/components/skills/Skills"
import {Qualifications} from "../src/components/qualifications/Qualifications"
import { Portfolio } from './components/portfolio/Portfolio'
import  Portfolio2  from './components/portfolio/Portfolio2'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Contact />     
        <Footer />
    </main>
    
  </React.StrictMode>
)
