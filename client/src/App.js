import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Registration from './components/registration/Registration'
import Authorization from './components/authorization/Authorization'
import Greeting from './components/greeting/Greeting'
import { useSelector } from 'react-redux'

import './App.scss'

const App = () => {
  const isAuth = useSelector(state => state.user.isAuth)


  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        {!isAuth &&
          <Switch>
            <Route path="/register"><Registration /></Route>
            <Route path="/login"><Authorization /></Route>
            <Route path="/" exact><Greeting /></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        }
      </div>
    </BrowserRouter>
  )
}

export default App