import { useState } from 'react';
import '../../styles/Collapse/Collapse.css';

function Collapse({ collapseTitle, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return !isOpen ? (
        <div className="collapse closeCollapse">
            <div className="collapse__button">
                <p>{collapseTitle}</p>
                <i
                    onClick={() => setIsOpen(true)}
                    className="fa-solid fa-chevron-up close"
                ></i>
            </div>
            <div className="collapse__content closeContent">{children}</div>
        </div>
    ) : (
        <div className="collapse openCollapse">
            <div className="collapse__button">
                <p>{collapseTitle}</p>
                <i
                    onClick={() => setIsOpen(false)}
                    className="fa-solid fa-chevron-up open"
                ></i>
            </div>
            <div className="collapse__content openContent">{children}</div>
        </div>
    );
}

export default Collapse;
