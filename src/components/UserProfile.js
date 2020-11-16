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

                    <PersonalData data={userData} />
                    <WorkData data={userData} />
                    <AddressData data={userData} />
                    <ContactData data={userData} />

                </div>
            </div>
        );
    }
}

export function PersonalData(props) {
    const { gender, birthdate } = props.data;

    return (
        <>
            <div className="profile__body__content">

                <div className="profile__body__content__title">ANAGRAPHIC</div>
                <div className="profile__body__content__data">
                    <ul>
                        <li>born on: {birthdate}</li>
                        <li>gender:  {gender}</li>
                        <br/>
                    </ul>
                </div>
            </div>
        </>
    )
}

export function WorkData(props) {
    const { company_name, department, job_title } = props.data;

    return (
        <>
            <div className="profile__body__content">

                <div className="profile__body__content__title">Work</div>
                <div className="profile__body__content__data">
                    <ul>
                        <li>company:    {company_name}</li>
                        <li>department:  {department}</li>
                        <li>job title: {job_title}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export function AddressData(props) {

    const { street, street_name, city, state, country, country_code, postal_code} = props.data.address[0];
    return (
        <>
            <div className="profile__body__content">

                <div className="profile__body__content__title">ADDRESS</div>
                <div className="profile__body__content__data">
                <ul>
                        <li>street:    {street}</li>
                        <li>street_name:  {street_name}</li>
                        <li>city:    {city}</li>
                        <li>state:  {state}</li>
                        <li>country:    {country}</li>
                        <li>country_code:  {country_code}</li>
                        <li>postal_code:    {postal_code}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export function ContactData(props) {
    const { email, phone} = props.data;
    return (
        <>
            <div className="profile__body__content">

                <div className="profile__body__content__title">CONTACT</div>
                <div className="profile__body__content__data">
                <ul>
                        <li>email:    {email}</li>
                        <li>phone:  {phone}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default UserProfile;
