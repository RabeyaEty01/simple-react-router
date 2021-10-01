import React from 'react';

const Friend = (props) => {
    const { name, email, address, phone, website } = props.friend;
    const friendStyle={
        border:'3px solid goldenrod',
        padding: '10px',
        borderRadius:'10px'
    }
    return (
        <div style={friendStyle}>
            <h2>I am :{name}</h2>
            <h5>Call me: {phone}</h5>
            <h5>Email: {email}</h5>
            <p>Visit me: {website}</p>
            <p>I leave in: {address.city}, {address.zipcode}</p>
        </div>
    );
};

export default Friend;