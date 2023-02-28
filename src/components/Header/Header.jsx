import { useState } from 'react';
import './header.scss';
import logo from '../../assets/icons/gpt_3_logo.svg';
const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const onBurgerToggle = arg => {
        if (window.innerWidth > 992) {
            return;
        } else {
            setIsBurgerOpen(arg);
        }
    };
    return (
        <header className="header" data-aos="fade-down">
            <button
                className={`header__burger${
                    isBurgerOpen ? ' header__burger_active' : ''
                }`}
                onClick={() => onBurgerToggle(true)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="container">
                <div className="header__container">
                    <a href="#" className="header__logo">
                        <img src={logo} alt="GPT-3 logotype" />
                    </a>
                    <nav
                        onClick={() => onBurgerToggle(false)}
                        className={`header__nav${
                            isBurgerOpen ? ' header__nav_active' : ''
                        }`}
                    >
                        <ul
                            className={`header__list${
                                isBurgerOpen ? ' header__list_active' : ''
                            }`}
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                className="header__list-close"
                                onClick={() => onBurgerToggle(false)}
                            >
                                <span></span>
                                <span></span>
                            </button>
                            <li className="header__list-item">
                                <a href="#" className="header__list-link">
                                    Home
                                </a>
                            </li>
                            <li className="header__list-item">
                                <a href="#" className="header__list-link">
                                    What is GPT?
                                </a>
                            </li>
                            <li className="header__list-item">
                                <a href="#" className="header__list-link">
                                    Open AI
                                </a>
                            </li>
                            <li className="header__list-item">
                                <a href="#" className="header__list-link">
                                    Case Studies
                                </a>
                            </li>
                            <li className="header__list-item">
                                <a href="#" className="header__list-link">
                                    Library
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__login">
                        {/* <button type="button" className="header__login-btn">
                        Sign in
                    </button> */}
                        <button
                            type="button"
                            className="header__login-btn header__login-btn_logged"
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
