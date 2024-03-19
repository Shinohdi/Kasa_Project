import { useState } from 'react';
import '../../styles/Collapse/Collapse.css';

function Collapse({ collapseTitle, collapseContent }) {
    const [isOpen, setIsOpen] = useState(false);

    return !isOpen ? (
        <div className="collapse">
            <div className="collapse__button">
                <p>{collapseTitle}</p>
                <i
                    onClick={() => setIsOpen(true)}
                    className="fa-solid fa-chevron-up"
                ></i>
            </div>
        </div>
    ) : (
        <div className="collapse">
            <div className="collapse__button">
                <p>{collapseTitle}</p>
                <i
                    onClick={() => setIsOpen(false)}
                    className="fa-solid fa-chevron-up"
                ></i>
            </div>
            <div className="collapse__content">
                <p>{collapseContent}</p>
            </div>
        </div>
    );
}

export default Collapse;
