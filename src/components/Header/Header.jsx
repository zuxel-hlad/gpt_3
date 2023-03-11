import { useState } from 'react';
import './header.scss';
import logo from '../../assets/icons/gpt_3_logo.svg';
import RegisterModal from '../RegisterModal/RegisterModal';
const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const isLogged = false;

    const onBurgerToggle = arg => {
        if (window.innerWidth > 992) {
            return;
        } else {
            setIsBurgerOpen(arg);
        }
    };

    const scrollTo = elId => {
        if (!elId) {
            return;
        } else {
            document.getElementById(elId).scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <header className="header" data-aos="fade-down">
            <RegisterModal
                show={isOpenModal}
                handleClose={() => setIsOpenModal(false)}
                isRegistered={isLogged}
            />
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
                                <button
                                    type="button"
                                    className="header__list-btn"
                                    onClick={() => scrollTo('home')}
                                >
                                    Home
                                </button>
                            </li>
                            <li className="header__list-item">
                                <button
                                    className="header__list-btn"
                                    onClick={() => scrollTo('about')}
                                >
                                    What is GPT?
                                </button>
                            </li>
                            <li className="header__list-item">
                                <button
                                    type="button"
                                    className="header__list-btn"
                                    onClick={() => scrollTo('blog')}
                                >
                                    Open AI
                                </button>
                            </li>
                            <li className="header__list-item">
                                <button
                                    type="button"
                                    className="header__list-btn"
                                    onClick={() => scrollTo('features')}
                                >
                                    Case Studies
                                </button>
                            </li>
                            <li className="header__list-item">
                                <button
                                    type="button"
                                    className="header__list-btn"
                                    onClick={() => scrollTo('advantages')}
                                >
                                    Library
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__login">
                        <button type="button" className="header__login-btn">
                            Sign in
                        </button>
                        <button
                            type="button"
                            className="header__login-btn header__login-btn_logged"
                            onClick={() => setIsOpenModal(true)}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
