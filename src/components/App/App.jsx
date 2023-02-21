import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Brands from '../Brands/Brands';
import './app.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Hero />
                <Brands />
            </main>
        </div>
    );
};

export default App;
