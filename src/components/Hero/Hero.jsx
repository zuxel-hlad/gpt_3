import heroImage from '../../assets/img/hero/hero_bg.png';
import peoples from '../../assets/img/hero/people.png';
import './hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__text">
                <h1 className="title title_gradient hero__title">
                    Let’s Build Something amazing with GPT-3 OpenAI
                </h1>
                <p className="hero__descr">
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <form className="hero__form">
                    <input
                        className="hero__form-input"
                        type="email"
                        placeholder="Your Email Address"
                    />
                    <button className="hero__form-btn" type="submit">
                        Get Started
                    </button>
                </form>
                <div className="hero__peoples">
                    <div className="hero__peoples-image">
                        <img
                            src={peoples}
                            alt="1,600 people requested access a visit in last 24 hours"
                        />
                    </div>
                    <span className="hero__peoples-descr">
                        1,600 people requested access a visit in last 24 hours
                    </span>
                </div>
            </div>
            <div className="hero__image">
                <img src={heroImage} alt="hero image" />
            </div>
        </section>
    );
};

export default Hero;
