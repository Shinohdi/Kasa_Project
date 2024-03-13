import logo from '../../images/LOGO-WHITE.svg';
import '../../styles/Footer/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="Kasa Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;
