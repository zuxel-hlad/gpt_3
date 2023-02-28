import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h3 className="footer__title title title_gradient">
                    Do you want to step in to the future before others
                </h3>
                <a href="" className="main-link footer__link">
                    Request Early Access
                </a>
                <div className="footer__contacts"></div>
                <span className="footer__copyright">
                    © 2021 GPT-3. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
