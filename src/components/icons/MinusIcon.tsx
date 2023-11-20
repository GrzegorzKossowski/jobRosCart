import React from 'react';

interface MinusIconProps {
    color?: string;
    width?: number;
    height?: number;
}

const MinusIcon = ({
    color = '#000',
    width = 32,
    height = 32,
}: MinusIconProps) => {
    return (
        <svg
            viewBox='0 0 24 24'
            width={width}
            height={height}
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            fill={color}
        >
                <path
                    d='M6 12H18'
                    stroke='#000000'
                ></path>
        </svg>
    );
};

export default MinusIcon;
