import React from 'react'
import { Link } from 'react-router-dom'

const Choice = () => {
  return (
    <>
      <Link to='/percentages'><h1>%</h1></Link>
      <Link to='/menu'><h1>X</h1></Link>
    </>
  )
}

export default Choice
