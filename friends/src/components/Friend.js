import React from 'react';

export default function Friend(props) {
    return(
        <div>
            <p> Friend #{props.id} </p>
            <p> Name:{props.name} </p>
            <p>  Age: {props.age} </p>
            <p>  Email: {props.email} </p>
        </div>
    )
};