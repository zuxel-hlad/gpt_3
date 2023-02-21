import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import './app.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Hero />
            </main>
        </div>
    );
};

export default App;
