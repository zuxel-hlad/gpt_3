import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Brands from '../Brands/Brands';
import About from '../About/About';
import Advantages from '../advantages/Advantages';
import Features from '../features/Features';
import './app.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Hero />
                <Brands />
                <About />
                <Advantages />
                <Features />
            </main>
        </div>
    );
};

export default App;
