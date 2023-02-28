import './footer.scss';
import logo from '../../assets/icons/gpt_3_logo.svg';
const Footer = () => {
    const content = [
        {
            title: 'Links',
            links: ['Overons', 'Social Media', 'Counters', 'Contact'],
        },
        {
            title: 'Company',
            links: ['Terms & Conditions', 'Privacy Policy', 'Contact'],
        },
        {
            title: 'Get in touch',
            links: [
                'Crechterwoord K12 182 DK Alknjkcb',
                '085-132567',
                'info@payme.net',
            ],
        },
    ];

    const foterLists = content.map(({ title, links }, idx) => {
        //list items
        const listItems = links.map((link, ind) => {
            return (
                <li className="footer__list-item" key={ind}>
                    <a href="#" className="footer__list-link main-link">
                        {link}
                    </a>
                </li>
            );
        });
        //list
        return (
            <ul className="footer__list" key={idx}>
                <h3 className="footer__list-title">{title}</h3>
                {listItems}
            </ul>
        );
    });
    return (
        <footer className="footer">
            <div className="container">
                <h3 className="footer__title title title_gradient">
                    Do you want to step in to the future before others
                </h3>
                <a href="" className="main-link footer__link">
                    Request Early Access
                </a>
                <div className="footer__info">
                    <div className="footer__company">
                        <a href="#" className="footer__logo">
                            <img src={logo} alt="GPT-3" />
                        </a>
                        <span className="footer__copyright footer__company-text">
                            Crechterwoord K12 182 DK Alknjkcb, All Rights
                            Reserved
                        </span>
                    </div>
                    <div className="footer__lists">{foterLists}</div>
                </div>
                <span className="footer__copyright">
                    © 2021 GPT-3. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
