import React from "react";
import '../styles/footer.css'
import logo from '../logo.svg';

interface IProps {
    theme: string
}

const Footer: React.FC<IProps> = ({ theme }) => {
    const footerStyle = `footer footer-${theme}`

    return (
        <footer className={footerStyle}>
            <span>{`</>`}</span>
            <span> with React & Typescript</span>
            <span> by Polar Bear</span>
        </footer >
    )
}

export default Footer