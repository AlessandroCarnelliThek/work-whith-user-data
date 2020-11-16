import React, { useState, useEffect } from 'react'
import { Redirect} from 'react-router'
import Loading from './Loading'
import UserCard from './UserCard'

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

export default UserList;
