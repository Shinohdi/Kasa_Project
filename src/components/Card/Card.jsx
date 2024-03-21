import '../../styles/Card/Card.css';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
    return (
        <div className="cWidth">
            <Link to={`/logement/${id}`}>
                <li key={id} className="card">
                    <p className="card__text">{title}</p>
                    <img
                        className="card__cover"
                        src={cover}
                        alt={`${title} cover`}
                    />
                </li>
            </Link>
        </div>
    );
}

export default Card;
