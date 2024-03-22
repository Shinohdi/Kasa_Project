import '../../styles/Accueil/Accueil.css';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import landscape from '../../images/Home-Background.jpg';
import apartmentList from '../../datas/logement.json';

function Home() {
    const banner_text = 'Chez vous, partout et ailleurs';

    return (
        <div className="home">
            <Banner background={landscape} text={banner_text} masking={true} />
            <ul className="cardsList">
                {apartmentList.map(({ id, title, cover }) => (
                    <div key={id} className="cWidth">
                        <Card id={id} title={title} cover={cover} />
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Home;
