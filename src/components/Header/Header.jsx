import { Link } from 'react-router-dom';
import logo from '../../images/LOGO.svg';
import '../../styles/Header/Header.css';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Kasa Logo" />
            <nav className="nav">
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">À propos</Link>
            </nav>
        </div>
    );
}

export default Header;
