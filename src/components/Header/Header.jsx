import { NavLink } from 'react-router-dom';
import logo from '../../images/LOGO.svg';
import '../../styles/Header/Header.css';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Kasa Logo" />
            <nav className="navbar">
                <NavLink
                    to="/"
                    //Si on est sur la page Accueil ou À propos, le texte du lien se souligne
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    Accueil
                </NavLink>
                <NavLink to="/a-propos">À propos</NavLink>
            </nav>
        </div>
    );
}

export default Header;
