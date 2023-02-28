import './about.scss';

const About = () => {
    return (
        <section className="about section" data-aos="fade-up">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__header" data-aos="fade-up">
                        <h2 className="bordered-title">What is GPT-3</h2>
                        <p className="about__descr about__header-descr">
                            We so opinion friends me message as delight. Whole
                            front do of plate heard oh ought. His defective nor
                            convinced residence own. Connection has put
                            impossible own apartments boisterous. At jointure
                            ladyship an insisted so humanity he. Friendly
                            bachelor entrance to on by.
                        </p>
                    </div>
                    <div className="about__main">
                        <h3
                            className="about__main-title title title_sm title_gradient"
                            data-aos="fade-up"
                        >
                            The possibilities are beyond your imagination
                        </h3>
                        <a href="#" className="main-link" data-aos="fade-up">
                            Explore The Library
                        </a>
                    </div>
                    <div className="about__footer">
                        <div
                            className="about__footer-column"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h2 className="bordered-title">Chatbots</h2>
                            <p className="about__descr">
                                We so opinion friends me message as delight.
                                Whole front do of plate heard oh ought.
                            </p>
                        </div>
                        <div
                            className="about__footer-column"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h2 className="bordered-title">Knowledgebase</h2>
                            <p className="about__descr">
                                At jointure ladyship an insisted so humanity he.
                                Friendly bachelor entrance to on by. As put
                                impossible own apartments b
                            </p>
                        </div>
                        <div
                            className="about__footer-column"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <h2 className="bordered-title">Education</h2>
                            <p className="about__descr">
                                At jointure ladyship an insisted so humanity he.
                                Friendly bachelor entrance to on by. As put
                                impossible own apartments b
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
