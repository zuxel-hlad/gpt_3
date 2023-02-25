import './features.scss';
import featuresImage from '../../assets/img/features/features_image.png';

const Features = () => {
    return (
        <section className="features">
            <div className="container features-container">
                <div className="features__column features__view">
                    <div className="features__image">
                        <img
                            src={featuresImage}
                            alt="The possibilities are beyond your imagination"
                        />
                    </div>
                </div>
                <div className="features__column features__text">
                    <a href="#" className="features__link main-link">
                        Request Early Access to Get Started
                    </a>
                    <h3 className="title title_sm title_gradient features__title">
                        The possibilities are beyond your imagination
                    </h3>
                    <p className="features__descr">
                        Yet bed any for travelling assistance indulgence
                        unpleasing. Not thoughts all exercise blessing.
                        Indulgence way everything joy alteration boisterous the
                        attachment. Party we years to order allow asked of.
                    </p>
                    <a href="#" className="main-link">
                        Request Early Access to Get Started
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Features;
