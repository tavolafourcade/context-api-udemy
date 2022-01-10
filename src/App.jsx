import React from 'react'
import Navbar from './components/Navbar'
import Principal from './components/Principal'
import ThemeProvider from './context/ThemeProvider'
import HolaProvider from './context/HolaProvider'
const App = () => {
  return (
    
    <ThemeProvider>
      <HolaProvider>
        <Navbar/>
        <Principal/>
      </HolaProvider>
    </ThemeProvider>
    
  )
}

export default App
