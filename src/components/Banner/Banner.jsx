import '../../styles/Banner/Banner.css';

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
