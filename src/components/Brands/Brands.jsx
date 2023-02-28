import google from '../../assets/img/brands/google.png';
import slack from '../../assets/img/brands/slack.png';
import atlassian from '../../assets/img/brands/atlassian.png';
import dropbox from '../../assets/img/brands/dropbox.png';
import shopify from '../../assets/img/brands/shopify.png';
import './brands.scss';

const Brands = () => {
    const brands = [google, slack, atlassian, dropbox, shopify].map(
        (brand, index) => (
            <div className="brands__brand" key={index}>
                <img src={brand} alt="brand picture" />
            </div>
        )
    );
    return (
        <section className="brands section">
            <div className="container brands__wrapper">
                <div className="brands__container">{brands}</div>
            </div>
        </section>
    );
};

export default Brands;
