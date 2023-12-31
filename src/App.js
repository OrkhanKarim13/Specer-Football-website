import React from 'react'
import Header from './components/Header'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App