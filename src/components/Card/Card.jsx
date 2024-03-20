import '../../styles/Card/Card.css';

function Card({ id, title, cover }) {
    return (
        <li key={id} className="card">
            <p className="card__text">{title}</p>
            <img className="card__cover" src={cover} alt={`${title} cover`} />
        </li>
    );
}

export default Card;
