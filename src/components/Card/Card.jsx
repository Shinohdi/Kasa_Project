import '../../styles/Card/Card.css';
import { Link } from 'react-router-dom';

//Composant qui permet de diriger l'utilisateur vers une page logement de son choix.
//Utilisé principalement dans la page Accueil.
function Card({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`}>
            <li className="card">
                <p className="card__text">{title}</p>
                <img
                    className="card__cover"
                    src={cover}
                    alt={`${title} cover`}
                />
            </li>
        </Link>
    );
}

export default Card;
