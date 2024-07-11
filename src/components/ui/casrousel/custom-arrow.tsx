import React from 'react';

const CustomPrevArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, color: '#000000', fontSize: '20px', zIndex: 1 }}
            onClick={onClick}
        >
            ◀
        </div>
    );
};

const CustomNextArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, color: '#000000', fontSize: '20px', zIndex: 1 }}
            onClick={onClick}
        >
            ▶
        </div>
    );
};

export { CustomPrevArrow, CustomNextArrow };
