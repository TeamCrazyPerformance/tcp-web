import React from 'react';
import './style.scss';

interface Props {
    className?: string;
}

export const Divider = (props: Props) => {
    const { className = '' } = props;
    return <hr className={`divider ${className}`}></hr>;
};

export default Divider;
