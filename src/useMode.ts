import { useEffect, useState } from "react";

const useMode = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')

        if (localTheme) {
            setTheme(localTheme)
        }
    }, [])

    return {
        theme, toggleTheme
    }
}

export default useMode