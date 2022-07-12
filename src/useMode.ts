import { useEffect, useState } from "react";

const useMode = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        console.log(localTheme)
        if (localTheme) {
            setTheme(localTheme)
        }
    }, [])

    return {
        theme, toggleTheme
    }
}

export default useMode