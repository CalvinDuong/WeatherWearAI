import React, { useEffect, useRef } from 'react';
import StyleSection from './styleSection';
import FitSection from './fitSection';
import PersonalStyle from './PersonalStyle';
import ColoredButton from './ColoredButton';
import './BottomSection.css';

const BottomSection = ({ setStyle, setFit, color, style, fit, setImageUrl, imageUrl }) => {
    const imgRef = useRef();

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.style.display = '';
        }
    }, [imageUrl]);

    return (
        <div className='bottom-section'>
            <div className='left'>
                <div className='style-fit-buttons-container'>
                    <StyleSection setStyle={setStyle} />
                    <div className='random'></div>
                    <FitSection setFit={setFit} />
                </div>
                <div className='personal-style'>
                    <PersonalStyle color={color} style={style} fit={fit} setImageUrl={setImageUrl} />
                </div>
            </div>
            <div className='right'>
                <img
                    ref={imgRef}
                    src={imageUrl}
                    alt=""
                    className='outfit'
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
            </div>

        </div>
    );
};

export default BottomSection;
