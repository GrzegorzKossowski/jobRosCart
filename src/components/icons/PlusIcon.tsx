import React from 'react';

interface PlusIconProps {
    color?: string;
    width?: number;
    height?: number;
}

const PlusIcon = ({
    color = '#000',
    width = 32,
    height = 32,
}: PlusIconProps) => {
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
                d='M6 12H18M12 6V18'
                stroke='#000000'
            ></path>
        </svg>
    );
};

export default PlusIcon;
