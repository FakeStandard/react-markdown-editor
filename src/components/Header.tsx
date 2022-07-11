import React from "react";
import '../styles/header.css'
import { FiSun } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'

interface IProps {
    theme: string
    toggleTheme: () => void
}

const Header: React.FC<IProps> = ({ theme, toggleTheme }) => {
    const headerStyle = `header ${theme}`

    return (
        <header className={headerStyle}>
            <div className="header-title">
                Markdown Editor
            </div>
            <div className="header-content" onClick={toggleTheme}>
                {theme === 'dark' ? <FaMoon /> : <FiSun />}
            </div>
        </header>
    )
}

export default Header