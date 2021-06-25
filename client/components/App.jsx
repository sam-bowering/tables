import React from 'react'
import Body from './Body'
import Tables from './Tables'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Body} />
      <Route path='/tables' exact component={Tables} />
    </Router>
  )
}

export default App
