import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Brands from '../Brands/Brands';
import About from '../About/About';
import Advantages from '../advantages/Advantages';
import Features from '../features/Features';
import Cta from '../Cta/Cta';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import ButtonUP from '../ButtonUP/ButtonUP';
import './app.scss';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'ease',
            once: false,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Hero />
                <Brands />
                <About />
                <Advantages />
                <Features />
                <Cta />
                <Blog />
                <Footer />
                <ButtonUP />
            </main>
        </div>
    );
};

export default App;
