import blogImage1 from '../../assets/img/blog/blog-image_1.png';
import blogImage2 from '../../assets/img/blog/blog-image_2.png';
import blogImage3 from '../../assets/img/blog/blog-image_3.png';
import blogImage4 from '../../assets/img/blog/blog-image_4.png';
import blogImage5 from '../../assets/img/blog/blog-image_5.png';
import './blog.scss';

const Blog = () => {
    const blogImages = [
        blogImage1,
        blogImage2,
        blogImage3,
        blogImage4,
        blogImage5,
    ];

    const blogListCards = blogImages.map((img, idx) => {
        return (
            <div
                className={`blog-list__card${
                    idx === 0 ? ' blog-list__card_first' : ''
                }`}
                key={idx}
                data-aos="fade-up"
            >
                <div className="blog-list__card-image">
                    <img
                        src={img}
                        alt="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
                <div className="blog-list__card-body">
                    <span className="blog-list__card-published">
                        Sep 26, 2021
                    </span>
                    <h3 className="blog-list__card-title title">
                        GPT-3 and Open AI is the future. Let us exlore how it
                        is?
                    </h3>
                    <a href="#!" className="main-link blog-list__card-link">
                        Read Full Article
                    </a>
                </div>
            </div>
        );
    });

    return (
        <section className="blog section">
            <div className="container">
                <h2
                    className="blog__title title title_gradient"
                    data-aos="fade-up"
                >
                    A lot is happening,
                    <br /> We are blogging about it.
                </h2>
                <div className="blog-list">{blogListCards}</div>
            </div>
        </section>
    );
};

export default Blog;
