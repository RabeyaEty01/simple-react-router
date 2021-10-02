import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title,id}=props.post;

    const postStyle = {
        border: '3px solid blue',
        padding: '10px',
        borderRadius: '10px'
    };

    return (
        <div style={postStyle}>
            <h5>{title}</h5>
           <Link to={`/post/${id}`}>
               <button>Post Detail</button>
           </Link>
        </div>
    );
};

export default Post;