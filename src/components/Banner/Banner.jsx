import '../../styles/Banner/Banner.css';

//Composant qui met en place une bannière avec une image de fond et un texte.
//Le paramètre masking permet de mettre un fond noir opaque sur la bannière.
function Banner({ background, text, masking }) {
    return (
        <div className="banner">
            <div className="banner__text">
                <h1>{text}</h1>
            </div>
            {masking ? (
                <div className="banner__mask">
                    <img src={background} alt="Banner Background" />
                </div>
            ) : (
                <img src={background} alt="Banner Background" />
            )}
        </div>
    );
}

export default Banner;
