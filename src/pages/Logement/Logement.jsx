import { useParams } from 'react-router-dom';
import apartmentList from '../../datas/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import '../../styles/Logement/Logement.css';

function Logement() {
    const rateRange = [1, 2, 3, 4, 5];
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
                    <p className="location">{apartment.location}</p>
                    <div className="tags">
                        {apartment.tags.map((tag) => (
                            <strong key={tag} className="tag">
                                {tag}
                            </strong>
                        ))}
                    </div>
                </div>
                <div className="page__text--rate">
                    <div className="host">
                        <p className="name">{apartment.host.name}</p>
                        <img
                            className="picture"
                            src={apartment.host.picture}
                            alt={`${apartment.host.name}`}
                        ></img>
                    </div>
                    <div className="ratings">
                        {rateRange.map((rangeElem) =>
                            apartment.rating >= rangeElem ? (
                                <i
                                    key={rangeElem}
                                    className="fa-solid fa-star colored"
                                ></i>
                            ) : (
                                <i
                                    key={rangeElem}
                                    className="fa-solid fa-star noColor"
                                ></i>
                            ),
                        )}
                    </div>
                </div>
            </div>
            <div className="page__collapseElements">
                <Collapse
                    collapseTitle="Description"
                    collapseContent={<p>{apartment.description}</p>}
                />
                <Collapse
                    collapseTitle="Équipements"
                    collapseContent={
                        <ul>
                            {apartment.equipments.map((equipement) => (
                                <li key={equipement}>{equipement}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    );
}

export default Logement;
