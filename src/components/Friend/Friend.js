import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, email, address, phone, website } = props.friend;
    const history = useHistory();

    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    };
    const url = `/friend/${id}`;
    
    const handleFriendClick = () => {
        history.push(`/friend/${id}`);

    }
    return (
        <div style={friendStyle}>
            <h2>I am :{name} {id}</h2>
            <h5>Call me: {phone}</h5>
            <h5>Email: {email}</h5>
            <p>Visit me: {website}</p>
            <p>I leave in: {address.city}, {address.zipcode}</p>
            <Link to={url}>Visit Me</Link>
            <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;