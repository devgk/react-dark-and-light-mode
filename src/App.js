import React, { useEffect } from 'react'
import Cookies from 'js-cookie'

import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
    function setDarkMode() {
        document.body.className = document.body.className.replace("light-theme","dark-theme")
    }

    function isDarkModeOn() {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
        return prefersDarkScheme.matches
    }

    function setPreferredColorSchemeAutomatically() {
        const currentModeSet = localStorage.getItem("THEME_COLOR_SCHEME")

        // Set Dark Mode
        if(undefined == currentModeSet && isDarkModeOn()) setDarkMode()
        else if('DARK' == currentModeSet) setDarkMode()
    }

    useEffect(() => {
        setPreferredColorSchemeAutomatically()
    })
    
    return (
        <>
            <Dashboard />
        </>
    )
}

export default App
