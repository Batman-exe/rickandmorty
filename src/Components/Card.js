import React from "react";
import './Card.scss';

export const Card = (props) => {
    const { name, img, gender, status } = props;
    return (
        <>
            <div className='card'>
                <img className='card-image' src={img} alt={name} />
                <h3>{name}</h3>
                <p>Gender: {gender}</p>
                <p>Status: {status}</p>
            </div>
        </>
    );
};
