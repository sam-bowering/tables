import React from 'react'
import Body from './Body'
import Menu from './Menu'
import Fractions from './Fractions'
import Tables from './Tables'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Body} />
      <Route path='/menu' exact component={Menu} />
      <Route path='/fractions' exact component={Fractions} />
      <Route path='/tables/:selectedTable' exact component={Tables} />
    </Router>
  )
}

export default App
