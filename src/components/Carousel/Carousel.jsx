import { useState } from 'react';
import arrowLeft from '../../images/arrow_left_ios-24px 1.png';
import arrowRight from '../../images/arrow_right_ios-24px 1.png';
import '../../styles/Carousel/Carousel.css';

//
function Carousel({ pictures, title }) {
    //Numéro de l'image affiché.
    const [indexNow, setIndexNow] = useState(1);
    const maxPictures = pictures.length;

    //Fonction qui va changer la variable indexNow en fonction du click de l'utilisateur sur le carrousel.
    function changePicture(direction) {
        let newIndex = indexNow;
        switch (direction) {
            case 'left':
                newIndex--;
                //Passe directement à l'image finale.
                if (newIndex < 1) {
                    newIndex = maxPictures;
                }
                break;
            case 'right':
                newIndex++;
                //Passe directement à la première image.
                if (newIndex > maxPictures) {
                    newIndex = 1;
                }
                break;
            default:
                return;
        }
        setIndexNow(newIndex);
    }

    //S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
    return maxPictures > 1 ? (
        <div className="page__carousel">
            <img
                className="page__carousel--picture"
                src={pictures[indexNow - 1]}
                alt={`${title} cover n°${indexNow}`}
            />
            <img
                onClick={() => changePicture('left')}
                className="arrow arrow__left"
                src={arrowLeft}
                alt="arrow left"
            />
            <img
                onClick={() => changePicture('right')}
                className="arrow arrow__right"
                src={arrowRight}
                alt="arrow right"
            />
            <div className="page__carousel--number">
                <p>
                    {indexNow} / {maxPictures}
                </p>
            </div>
        </div>
    ) : (
        <div className="page__carousel">
            <img
                className="page__carousel--picture"
                src={pictures[indexNow - 1]}
                alt={`${title} cover n°${indexNow}`}
            />
        </div>
    );
}

export default Carousel;
