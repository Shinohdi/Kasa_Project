import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import apartmentList from '../../datas/logement.json';
import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel';
import '../../styles/Logement/Logement.css';

function Logement() {
    const rateRange = [1, 2, 3, 4, 5];
    const { idLogement } = useParams();
    const apartment = apartmentList.find((apart) => apart.id === idLogement);

    return apartment !== undefined ? (
        <div className="page">
            <Carousel pictures={apartment.pictures} title={apartment.title} />
            <div className="page__property">
                <div className="page__property--text">
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
                <div className="page__property--specifics">
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
    ) : (
        <Navigate to={`/${idLogement}`} replace={true} />
    );
}

export default Logement;
