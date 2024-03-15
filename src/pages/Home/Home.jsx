import '../../styles/Home/Home.css';
import Banner from '../../components/Banner/Banner';
import landscape from '../../images/Home-Background.jpg';

function Home() {
    const banner_text = 'Chez vous, partout et ailleurs';

    return <Banner background={landscape} text={banner_text} masking={true} />;
}

export default Home;
