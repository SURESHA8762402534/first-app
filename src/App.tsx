import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Country from './componets/Country'
import Nav from './componets/Nav'
import Weather from './componets/Weather'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/country' element={<Country/>}/>
        <Route path='/weather' element={<Weather/>}/>
      </Routes>
    </div>
  )
}

export default App