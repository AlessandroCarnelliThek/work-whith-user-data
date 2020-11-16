import React from 'react';
import { Link } from 'react-router-dom'


function UserCard(props) {
    const { id, first_name, last_name, avatar } = props.data;
    return (
        <Link className="card Link" to={`/${id}`}>
            <div className="card__img"><img src={avatar} alt="avatar" /></div>
            <div className="card__content">{first_name} {last_name}</div>
        </Link>
    );
}

export default UserCard;
