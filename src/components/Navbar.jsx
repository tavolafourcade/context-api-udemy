import React, { useContext} from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Navbar = () => {
    //Accesing to ThemeContext
    const {theme, cambioColor} = useContext(ThemeContext)

    return (
        <div style=
    {
        {
            background:theme.background,
            color: theme.color
        }
    }>
        <h1>Navbar</h1>
        <label htmlFor="">Color Texto</label>
        <input
        type='color'
        onChange={e=>cambioColor({...theme, color: e.target.value})}/>
        
        <label htmlFor="">Color Fondo</label>
        <input
        type='color'
        onChange={e=>cambioColor({...theme, background: e.target.value})}/>
    </div>
    )
}

export default Navbar
