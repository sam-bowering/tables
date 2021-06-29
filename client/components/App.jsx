import React from 'react'
import Body from './Body'
import Menu from './Menu'
import Percentages from './Percentages'
import Tables from './Tables'
import TablesAll from './TablesAll'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Body} />
      <Route path='/menu' exact component={Menu} />
      <Route path='/percentages' exact component={Percentages} />
      <Route path='/tables/all' exact component={TablesAll} />
      <Route path='/tables/:selectedTable' exact component={Tables} />
    </Router>
  )
}

export default App
