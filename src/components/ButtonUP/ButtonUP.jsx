import './buttonUP.scss';
import icon from '../../assets/svg/up.svg';
import { useEffect, useState } from 'react';

const ButtonUP = () => {
    const [isVisible, setIsVisible] = useState(false);
    const showHideClassName = isVisible
        ? 'up-button button-visible'
        : 'up-button button-hide';
    function measureHeight() {
        const pageHeight = document.body.scrollHeight;
        const scrollPosition = window.scrollY;
        const scrolledPercentage = (scrollPosition / pageHeight) * 100;

        if (scrolledPercentage >= 20) {
            setIsVisible(true);
        } else if (scrolledPercentage < 20) {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', measureHeight);
        return () => window.removeEventListener('scroll', measureHeight);
    }, []);

    return (
        <button
            type="button"
            className={showHideClassName}
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }
        >
            <img src={icon} alt="go to top" />
        </button>
    );
};

export default ButtonUP;
