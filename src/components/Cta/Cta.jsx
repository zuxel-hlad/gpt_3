import './cta.scss';

const Cta = () => {
    return (
        <section className="cta section" data-aos="fade-up">
            <div className="container">
                <div className="cta__banner">
                    <div className="cta__banner-text">
                        <a href="#" className="main-link cta__banner-link">
                            Request Early Access to Get Started
                        </a>
                        <h3 className="title cta__banner-title">
                            Register today & start exploring the endless
                            possiblities.
                        </h3>
                    </div>
                    <button type="button" className="cta__banner-btn">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cta;
