import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Redirect} from 'react-router'

import Loading from './Loading'

function UserList() {
    const [userData, setUserData] = useState([])

    function getData() {
        fetch("https://myfakeapi.com/api/users")
            .then(responce => responce.json())
            .then(data => setUserData(data.Users))
    }
    useEffect(getData, [])


    if (userData < 1) {
        return(
            <>
            <Loading />     
            </>
        ) 
    } else {
        return (
            <div>

                {userData.map(utente => <UserCard key={utente.id} data={utente} />)}
                <Redirect to="/main"/>

            </div>
        )
    }
}


export function UserCard(props) {
    const { id, first_name, last_name, avatar } = props.data;
    return (
        <Link className="card Link" to={`/${id}`}>
            <div className="card__img"><img src={avatar} alt="avatar" /></div>
            <div className="card__content">{first_name} {last_name}</div>
        </Link>
    );
}


export default UserList;
