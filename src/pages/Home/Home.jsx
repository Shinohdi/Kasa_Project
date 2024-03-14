import '../../styles/Home/Home.css';
import background from '../../images/e270fc8fc902a1eb738458e7b29c1899.jpg';

function Home() {
    return (
        <div className="description">
            <div className="description__text">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="description__mask">
                <img src={background} alt="Description Background" />
            </div>
        </div>
    );
}

export default Home;
