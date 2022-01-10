import React, { createContext, useState } from 'react'

// Context creation
export const ThemeContext = createContext()

const ThemeProvider = (props) => {
    const themes = {
        color: '#000',
        background: '#eee'
    }
    const [theme, setTheme] = useState(themes)
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
