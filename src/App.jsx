import React from 'react'
import Navbar from './components/Navbar'
import ThemeProvider from './context/ThemeProvider'
const App = () => {
  return (
    <ThemeProvider>
      <Navbar/>
    </ThemeProvider>
  )
}

export default App
