import React, { createContext, useState, useEffect } from 'react'

// Context creation
export const ThemeContext = createContext()

const ThemeProvider = (props) => {
    const themes = {
        color: '#000',
        background: '#eee'
    }
    const [theme, setTheme] = useState(themes)

    // Saving themes in localStorage
    useEffect(() => {
        if(localStorage.getItem('themeLocal')){
            const themeLocal = JSON.parse(localStorage.getItem('themeLocal'))
            setTheme(themeLocal)
        }
    }, [])

    const cambioColor = value => {
        setTheme(value)
        // Saving color changes in the localStorage
        localStorage.setItem('themeLocal', JSON.stringify(value))
    }
    return (
        <ThemeContext.Provider value={{theme, cambioColor}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
