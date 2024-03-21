import { useParams } from 'react-router-dom';
import apartmentList from '../../datas/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import '../../styles/Logement/Logement.css';

function Logement() {
    const { idLogement } = useParams();
    const apartment = apartmentList.find((apart) => apart.id === idLogement);

    return (
        <div className="page">
            <div className="page__carousel">
                <img
                    src={apartment.pictures[0]}
                    alt={`${apartment.title} cover`}
                ></img>
            </div>
            <div className="page__text">
                <div className="page__text--details">
                    <h1 className="title">{apartment.title}</h1>
                </div>
                <div className="page__text--rate"></div>
            </div>
            <div className="page__collapseElements">
                <Collapse
                    collapseTitle="Description"
                    collapseContent={apartment.description}
                />
                <Collapse
                    collapseTitle="Équipements"
                    collapseContent={apartment.equipments}
                />
            </div>
        </div>
    );
}

export default Logement;
