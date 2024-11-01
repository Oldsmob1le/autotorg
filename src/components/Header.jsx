import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HeaderBanner.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">О нас</Link></li>
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/users">Пользователи</Link></li>
                </ul>
            </nav>
            <div className="logo">
                <a href="/">
                    <img src="/vite.svg" alt="Logo" />
                </a>
            </div>
            <div className="auth-buttons">
                <button className="register">Регистрация</button>
                <button className="login">Вход</button>
            </div>
        </header>
    );
};

export default Header;