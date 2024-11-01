import React from 'react';
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="/">АвтоТорг</a>
                <nav className="footer-nav">
                    <a href="/">
                        <button className="footer-btn">Наверх</button>
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;