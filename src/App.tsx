import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Country from './component/Country'
import Nav from './component/Nav'
import Weather from './component/Weather'

const App = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Nav navigate={navigate}/>
      <Routes>
        <Route path='/country/:country' element={<Country/>}/>
        <Route path='/weather/:capital' element={<Weather/>}/>
      </Routes>
    </div>
  )
}

export default App