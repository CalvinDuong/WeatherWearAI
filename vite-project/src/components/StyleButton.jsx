import React from 'react';
import './StyleButton.css';

const StyleButton = ({ icon, name, onClick }) => {
    const isIconAString = typeof icon === 'string';

    return (
        <button className="card" onClick={onClick}>
            {icon && (
                <div className="icon">
                    {isIconAString ? <img src={icon} alt={name} /> : icon}
                </div>
            )}
            <div className="name">{name}</div>
        </button>
    );
};

export default StyleButton;