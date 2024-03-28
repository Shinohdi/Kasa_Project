import { useState } from 'react';
import arrowLeft from '../../images/arrow_left_ios-24px 1.png';
import arrowRight from '../../images/arrow_right_ios-24px 1.png';
import '../../styles/Carousel/Carousel.css';

function Carousel({ pictures, title }) {
    const [indexNow, setIndexNow] = useState(1);
    const maxPictures = pictures.length;

    function changePicture(direction) {
        let newIndex = indexNow;

        switch (direction) {
            case 'left':
                newIndex--;
                if (newIndex < 1) {
                    newIndex = maxPictures;
                }
                break;
            case 'right':
                newIndex++;
                if (newIndex > maxPictures) {
                    newIndex = 1;
                }
                break;
            default:
                return;
        }

        setIndexNow(newIndex);
    }

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
