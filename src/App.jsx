import { useState } from 'react'
// import './assets/style/style.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import MovieDetail from './pages/Details'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function App() {

  return (
    <>
      <Router>
        <Navbar />
        <main>
          <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:name" element={<MovieDetail />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
     
    </>
  )
}
