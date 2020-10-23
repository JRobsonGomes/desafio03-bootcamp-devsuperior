import React from 'react';
import './styles.scss';


type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <div className="btn-content">
        <button className="btn">
            <h5 className="btn-text">{text}</h5>
        </button>
    </div>
);

export default Button;