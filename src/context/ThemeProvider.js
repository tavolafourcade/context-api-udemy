import React, { createContext } from 'react'

// Context creation
export const ThemeContext = createContext()

const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
