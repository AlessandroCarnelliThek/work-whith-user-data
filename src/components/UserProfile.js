import React, { useState, useEffect } from 'react';
import Loading from './Loading'

function UserProfile(props) {
    const target = props.location.pathname
    const [userData, setUserData] = useState({})


    useEffect(() => {
        fetch(`https://myfakeapi.com/api/users${target}`)
            .then(response => response.json())
            .then(data => setUserData(data.User))
    }, [target])

    const { id, avatar, first_name, last_name } = userData;

    if (target !== `/${id}`) {
        return <Loading />
    } else {
        return (
            <div className="profile">

                <div className="profile__head">
                    <div className="profile__avatar"><img src={avatar} alt="avatar" /></div>
                </div>

                <div className="profile__body">
                    <div className="profile__body__title">{first_name} {last_name}</div>
                    <hr />

                    <div className="profile__body__content">
                        <h5>Dati personali:</h5>
                        <div></div>
                        <hr />

                        <h5>Indirizzo:</h5>
                        <hr />

                        <h5>Contatti:</h5>
                    </div>

                </div>
            </div>
        );
    }
}

//export function PersonalData()













export default UserProfile;


/*

"id": 1,
        "first_name": "Alyosha",
        "last_name": "Caldero",
        "email": "acaldero0@behance.net",
        "gender": "Male",
        "birthdate": "29/12/1997",
        "company_name": "King and Sons",
        "department": "Sales",
        "job_title": "Senior Editor",
        "address": [
            {
                "street": "1 Hanson Terrace",
                "street_name": "Merrick",
                "city": "Beaufort",
                "state": "South Carolina",
                "country": "United States",
                "country_code": "US",
                "postal_code": "29905"
            }
        ],
        "phone": "+7 (835) 885-9702",
        "avatar": "https://robohash.org/voluptasautmagni.png?size=180x180&set=set1",
        "email_verified": true,
        "password": "6707389d040d09a08ad2803846f30db544242f06",
        "last_login": "Never",
        "last_login_ip": "239.243.71.212",
        "subscribed": true

        */