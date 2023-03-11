import React, { useState } from 'react';
import close from '../../assets/svg/close.svg';
import './registerModal.scss';

const RegisterModal = ({ handleClose, show, isRegistered }) => {
    const showHideClassName = show
        ? 'modal display-block'
        : 'modal display-none';
    document.body.style.overflow = show ? 'hidden' : 'unset';

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Submitted values:', email, username, password);
        handleClose();
    };

    return (
        <div className={showHideClassName} onClick={handleClose}>
            <div className="modal-main" onClick={e => e.stopPropagation()}>
                <h2 className="modal-main__title title title_sm">
                    <span className="">Введите логин и пароль для входа.</span>
                    {/* <span className="">Введите данные для регистрации:</span> */}
                </h2>
                <button
                    type="button"
                    className="modal-main__close"
                    onClick={handleClose}
                >
                    <img src={close} alt="close modal" />
                </button>
                <form onSubmit={handleSubmit} className="modal-form">
                    <label
                        className={`modal-form__label${
                            isRegistered ? ' modal-form__label_hide' : ''
                        }`}
                    >
                        <span className="modal-form__label-text">Email:</span>
                        <input
                            type="email"
                            value={email}
                            placeholder="Введите вашу почту"
                            onChange={e => setEmail(e.target.value)}
                            className="modal-form__input"
                        />
                    </label>
                    <label className="modal-form__label">
                        <span className="modal-form__label-text">Логин:</span>
                        <input
                            type="password"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="modal-form__input"
                            placeholder="Введите ваш логин"
                        />
                    </label>
                    <label className="modal-form__label">
                        <span className="modal-form__label-text">Пароль:</span>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="modal-form__input"
                            placeholder="Введите ваш пароль"
                        />
                    </label>
                    <button type="submit" className="modal-form__btn">
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;
