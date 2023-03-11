import blogImage1 from '../../assets/img/blog/blog-image_1.png';
import blogImage2 from '../../assets/img/blog/blog-image_2.png';
import blogImage3 from '../../assets/img/blog/blog-image_3.png';
import blogImage4 from '../../assets/img/blog/blog-image_4.png';
import blogImage5 from '../../assets/img/blog/blog-image_5.png';
import './blog.scss';

const blogMockData = [
    {
        id: 1,
        img: blogImage1,
        text: '"We believe AI should be an extension of individual human wills and, in the spirit of liberty, as broadly and evenly distributed as is possible safely." - OpenAI Charter.',
        publishes: 'Jan 1, 2021',
    },
    {
        id: 2,
        img: blogImage2,
        text: '"OpenAI is an independent research organization consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc." - OpenAI Website.',
        publishes: 'Sep 26, 2021',
    },
    {
        id: 3,
        img: blogImage3,
        text: '"We are creating AI in a way that benefits humanity as a whole, not just a select few. We believe that AI has the potential to solve some of the world\'s biggest challenges, and we\'re working to make that happen." - OpenAI Blog.',
        publishes: 'Deс 12, 2022',
    },
    {
        id: 4,
        img: blogImage4,
        text: "\"At OpenAI, we believe that AI can be a powerful tool for solving some of the world's biggest challenges, from climate change to healthcare. But we also recognize that AI has the potential to be misused, and we're working to ensure that doesn't happen.\" - OpenAI Twitter.",
        publishes: 'Mar 14, 2023',
    },
    {
        id: 5,
        img: blogImage5,
        text: '"We\'re working to create AI that can learn from humans and work with us to solve problems. Our goal is to build a future where AI and humans can collaborate to create a better world." - OpenAI LinkedIn.',
        publishes: 'Apr 5, 2023',
    },
];

const Blog = () => {
    const blogListCards = blogMockData.map(
        ({ text, img, id, publishes }, idx) => {
            return (
                <div
                    className={`blog-list__card${
                        idx === 0 ? ' blog-list__card_first' : ''
                    }`}
                    key={idx}
                    data-aos="fade-up"
                >
                    <div className="blog-list__card-image">
                        <img src={img} alt={text} />
                    </div>
                    <div className="blog-list__card-body">
                        <span className="blog-list__card-published">
                            {publishes}
                        </span>
                        <h3 className="blog-list__card-title title">{text}</h3>
                        <a href="#!" className="main-link blog-list__card-link">
                            Read Full Article
                        </a>
                    </div>
                </div>
            );
        }
    );

    return (
        <section className="blog section" id="blog">
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
