import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Registration from './components/registration/Registration'
import Authorization from './components/authorization/Authorization'
import Greeting from './components/greeting/Greeting'

import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Route path="/register"><Registration /></Route>
        <Route path="/login"><Authorization /></Route>
        <Route path="/" exact><Greeting /></Route>
        <Redirect to="/"></Redirect>
      </div>
    </BrowserRouter>
  )
}

export default App