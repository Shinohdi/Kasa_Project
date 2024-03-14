function Banner({ background }) {
    return (
        <div className="description">
            <div className="description__text">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="description__mask">
                <img src={background} alt="Banner Background" />
            </div>
        </div>
    );
}

export default Banner;
